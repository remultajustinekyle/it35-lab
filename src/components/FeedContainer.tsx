import { useState, useEffect } from 'react';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonModal, IonFooter, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonText, IonAvatar, IonCol, IonGrid, IonRow, IonIcon, IonPopover, IonList, IonItem, IonTextarea } from '@ionic/react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabaseClient';
import { colorFill, pencil, trash, heart, heartOutline, chatbubbleOutline, send, happy, sad, thumbsUp, flame, ellipsisVertical } from 'ionicons/icons';

type ReactionType = 'heart' | 'laugh' | 'sad' | 'angry' | 'like';

interface Reaction {
  reaction_id: string;
  post_id: string;
  user_id: string;
  username: string;
  reaction_type: ReactionType;
}

interface Comment {
  comment_id: string;
  post_id: string;
  user_id: string;
  username: string;
  avatar_url: string;
  comment_content: string;
  comment_created_at: string;
}

interface Post {
  post_id: string;
  user_id: string;
  username: string;
  avatar_url: string;
  post_content: string;
  post_created_at: string;
  post_updated_at: string;
  reactions: Reaction[];
  comments: Comment[];
}

const FeedContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState('');
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [reactionPopoverState, setReactionPopoverState] = useState<{ open: boolean; event: Event | null; postId: string | null }>({ open: false, event: null, postId: null });
  const [commentContent, setCommentContent] = useState('');
  const [selectedPostForComment, setSelectedPostForComment] = useState<string | null>(null);
  const [showComments, setShowComments] = useState<{ [key: string]: boolean }>({});
  const [menuPopoverState, setMenuPopoverState] = useState<{ open: boolean; event: Event | null; postId: string | null }>({ open: false, event: null, postId: null });

  const fetchPosts = async () => {
    const { data: postsData, error: postsError } = await supabase
      .from('posts')
      .select('*')
      .order('post_created_at', { ascending: false });

    if (!postsError && postsData) {
      const postsWithReactionsAndComments = await Promise.all(
        postsData.map(async (post) => {
          // Fetch reactions for this post
          const { data: reactionsData } = await supabase
            .from('reactions')
            .select('*')
            .eq('post_id', post.post_id);

          // Fetch comments for this post
          const { data: commentsData } = await supabase
            .from('comments')
            .select('*')
            .eq('post_id', post.post_id)
            .order('comment_created_at', { ascending: true });

          return {
            ...post,
            reactions: reactionsData || [],
            comments: commentsData || []
          };
        })
      );

      setPosts(postsWithReactionsAndComments);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data: authData } = await supabase.auth.getUser();
      if (authData?.user?.email?.endsWith('@nbsc.edu.ph')) {
        setUser(authData.user);
        const { data: userData, error } = await supabase
          .from('users')
          .select('user_id, username, user_avatar_url')
          .eq('user_email', authData.user.email)
          .single();
        if (!error && userData) {
          setUser({ ...authData.user, id: userData.user_id });
          setUsername(userData.username);
        }
      }
    };
    fetchUser();
    fetchPosts();
  }, []);

  const createPost = async () => {
    if (!postContent || !user || !username) return;
  
    // Fetch avatar URL
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('user_avatar_url')
      .eq('user_id', user.id)
      .single();
  
    if (userError) {
      console.error('Error fetching user avatar:', userError);
      return;
    }
  
    const avatarUrl = userData?.user_avatar_url || 'https://ionicframework.com/docs/img/demos/avatar.svg';
  
    // Insert post with avatar URL
    const { data, error } = await supabase
      .from('posts')
      .insert([
        { post_content: postContent, user_id: user.id, username, avatar_url: avatarUrl }
      ])
      .select('*');
  
    if (!error && data) {
      setPosts([data[0] as Post, ...posts]);
    }
  
    setPostContent('');
  };

  const deletePost = async (post_id: string) => {
    await supabase.from('posts').delete().match({ post_id });
    setPosts(posts.filter(post => post.post_id !== post_id));
  };

  const startEditingPost = (post: Post) => {
    setEditingPost(post);
    setPostContent(post.post_content);
    setIsModalOpen(true);
  };

  const savePost = async () => {
    if (!postContent || !editingPost) return;
    const { data, error } = await supabase
      .from('posts')
      .update({ post_content: postContent })
      .match({ post_id: editingPost.post_id })
      .select('*');
    if (!error && data) {
      const updatedPost = data[0] as Post;
      setPosts(posts.map(post => (post.post_id === updatedPost.post_id ? updatedPost : post)));
      setPostContent('');
      setEditingPost(null);
      setIsModalOpen(false);
      setIsAlertOpen(true);
    }
  };

  const getReactionIcon = (type: ReactionType) => {
    switch (type) {
      case 'heart': return heart;
      case 'laugh': return happy;
      case 'sad': return sad;
      case 'angry': return flame;
      case 'like': return thumbsUp;
      default: return heartOutline;
    }
  };

  const getReactionColor = (type: ReactionType) => {
    switch (type) {
      case 'heart': return 'danger';
      case 'laugh': return 'warning';
      case 'sad': return 'medium';
      case 'angry': return 'danger';
      case 'like': return 'primary';
      default: return 'medium';
    }
  };

  const toggleReaction = async (postId: string, reactionType: ReactionType) => {
    if (!user || !username) return;

    const existingReaction = posts
      .find(p => p.post_id === postId)
      ?.reactions.find(r => r.user_id === user.id);

    if (existingReaction) {
      // Remove reaction if it's the same type, otherwise update it
      if (existingReaction.reaction_type === reactionType) {
        await supabase
          .from('reactions')
          .delete()
          .match({ reaction_id: existingReaction.reaction_id });
      } else {
        await supabase
          .from('reactions')
          .update({ reaction_type: reactionType })
          .match({ reaction_id: existingReaction.reaction_id });
      }
    } else {
      // Add new reaction
      await supabase
        .from('reactions')
        .insert([
          {
            post_id: postId,
            user_id: user.id,
            username: username,
            reaction_type: reactionType
          }
        ]);
    }

    setReactionPopoverState({ open: false, event: null, postId: null });
    fetchPosts();
  };

  const addComment = async (postId: string) => {
    if (!user || !username || !commentContent.trim()) return;

    // Fetch user's avatar URL
    const { data: userData } = await supabase
      .from('users')
      .select('user_avatar_url')
      .eq('user_id', user.id)
      .single();

    const avatarUrl = userData?.user_avatar_url || 'https://ionicframework.com/docs/img/demos/avatar.svg';

    // Add comment
    await supabase
      .from('comments')
      .insert([
        {
          post_id: postId,
          user_id: user.id,
          username: username,
          avatar_url: avatarUrl,
          comment_content: commentContent
        }
      ]);

    // Clear comment input and refresh posts
    setCommentContent('');
    setSelectedPostForComment(null);
    fetchPosts();
  };

  const toggleComments = (postId: string) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <>
      <IonContent>
        {user ? (
          <>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Create Post</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonInput
                  value={postContent}
                  onIonChange={e => setPostContent(e.detail.value!)}
                  placeholder="Write a post..."
                />
              </IonCardContent>
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem' }}>
                <IonButton onClick={createPost}>Post</IonButton>
              </div>
            </IonCard>

            {posts.map(post => (
              <IonCard key={post.post_id} style={{ marginTop: '2rem' }}>
                <IonCardHeader>
                  <IonRow>
                    <IonCol size="1.85">
                      <IonAvatar>
                        <img alt={post.username} src={post.avatar_url} />
                      </IonAvatar>
                    </IonCol>
                    <IonCol>
                      <IonCardTitle style={{ marginTop: '10px' }}>{post.username}</IonCardTitle>
                      <IonCardSubtitle>{new Date(post.post_created_at).toLocaleString()}</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="auto">
                      {user.id === String(post.user_id) && (
                        <IonButton
                          fill="clear"
                          onClick={(e) =>
                            setMenuPopoverState({
                              open: true,
                              event: e.nativeEvent,
                              postId: post.post_id,
                            })
                          }
                        >
                          <IonIcon color="medium" icon={ellipsisVertical} />
                        </IonButton>
                      )}
                    </IonCol>
                  </IonRow>
                </IonCardHeader>

                <IonCardContent>
                  <IonText style={{ color: 'black' }}>
                    <h1>{post.post_content}</h1>
                  </IonText>

                  {/* Interaction buttons row */}
                  <div style={{ 
                    borderTop: '1px solid var(--ion-color-light)', 
                    marginTop: '1rem',
                    paddingTop: '0.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      {/* Reactions */}
                      <div>
                        <IonButton
                          fill="clear"
                          onClick={(e) => {
                            setReactionPopoverState({
                              open: true,
                              event: e.nativeEvent,
                              postId: post.post_id,
                            });
                          }}
                        >
                          {post.reactions.some(r => r.user_id === user.id) ? (
                            <>
                              <IonIcon
                                slot="start"
                                icon={getReactionIcon(post.reactions.find(r => r.user_id === user.id)?.reaction_type || 'like')}
                                color={getReactionColor(post.reactions.find(r => r.user_id === user.id)?.reaction_type || 'like')}
                              />
                              {post.reactions.length}
                            </>
                          ) : (
                            <>
                              <IonIcon slot="start" icon={heartOutline} color="medium" />
                              {post.reactions.length}
                            </>
                          )}
                        </IonButton>

                        <IonPopover
                          isOpen={reactionPopoverState.open && reactionPopoverState.postId === post.post_id}
                          event={reactionPopoverState.event}
                          onDidDismiss={() => setReactionPopoverState({ open: false, event: null, postId: null })}
                        >
                          <div style={{ display: 'flex', padding: '0.5rem', gap: '0.5rem' }}>
                            {(['heart', 'laugh', 'sad', 'angry', 'like'] as ReactionType[]).map((type) => (
                              <IonButton
                                key={type}
                                fill="clear"
                                onClick={() => toggleReaction(post.post_id, type)}
                              >
                                <IonIcon
                                  icon={getReactionIcon(type)}
                                  color={getReactionColor(type)}
                                  style={{ fontSize: '1.5rem' }}
                                />
                              </IonButton>
                            ))}
                          </div>
                        </IonPopover>
                      </div>

                      {/* Comments */}
                      <div>
                        <IonButton
                          fill="clear"
                          onClick={() => toggleComments(post.post_id)}
                        >
                          <IonIcon slot="start" icon={chatbubbleOutline} />
                          {post.comments.length}
                        </IonButton>
                      </div>
                    </div>

                    {/* Reaction summary */}
                    <div style={{ fontSize: '0.9rem', color: 'var(--ion-color-medium)' }}>
                      {Object.entries(
                        post.reactions.reduce((acc, reaction) => {
                          acc[reaction.reaction_type] = (acc[reaction.reaction_type] || 0) + 1;
                          return acc;
                        }, {} as Record<ReactionType, number>)
                      ).map(([type, count]) => (
                        <span key={type} style={{ marginRight: '1rem' }}>
                          <IonIcon
                            icon={getReactionIcon(type as ReactionType)}
                            color={getReactionColor(type as ReactionType)}
                            style={{ verticalAlign: 'middle', marginRight: '0.25rem' }}
                          />
                          {count}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Comments section */}
                  {showComments[post.post_id] && (
                    <div style={{ 
                      marginTop: '1rem',
                      borderTop: '1px solid var(--ion-color-light)',
                      paddingTop: '1rem'
                    }}>
                      {post.comments.map(comment => (
                        <IonItem key={comment.comment_id} lines="none">
                          <IonAvatar slot="start">
                            <img alt={comment.username} src={comment.avatar_url} />
                          </IonAvatar>
                          <IonLabel>
                            <h3>{comment.username}</h3>
                            <p>{comment.comment_content}</p>
                            <p><small>{new Date(comment.comment_created_at).toLocaleString()}</small></p>
                          </IonLabel>
                        </IonItem>
                      ))}

                      <div style={{ 
                        display: 'flex', 
                        gap: '0.5rem', 
                        marginTop: '1rem',
                        padding: '0 1rem'
                      }}>
                        <IonInput
                          placeholder="Write a comment..."
                          value={selectedPostForComment === post.post_id ? commentContent : ''}
                          onIonFocus={() => setSelectedPostForComment(post.post_id)}
                          onIonChange={e => setCommentContent(e.detail.value!)}
                        />
                        <IonButton
                          fill="clear"
                          onClick={() => addComment(post.post_id)}
                        >
                          <IonIcon icon={send} />
                        </IonButton>
                      </div>
                    </div>
                  )}
                </IonCardContent>

                {/* Menu popover for edit/delete */}
                <IonPopover
                  isOpen={menuPopoverState.open && menuPopoverState.postId === post.post_id}
                  event={menuPopoverState.event}
                  onDidDismiss={() => setMenuPopoverState({ open: false, event: null, postId: null })}
                >
                  <IonButton
                    fill="clear"
                    onClick={() => {
                      startEditingPost(post);
                      setMenuPopoverState({ open: false, event: null, postId: null });
                    }}
                  >
                    <IonIcon slot="start" icon={pencil} />
                    Edit
                  </IonButton>
                  <IonButton
                    fill="clear"
                    color="danger"
                    onClick={() => {
                      deletePost(post.post_id);
                      setMenuPopoverState({ open: false, event: null, postId: null });
                    }}
                  >
                    <IonIcon slot="start" icon={trash} />
                    Delete
                  </IonButton>
                </IonPopover>
              </IonCard>
            ))}
          </>
        ) : (
          <IonLabel>Loading...</IonLabel>
        )}
      </IonContent>
      <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit Post</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonInput
            value={postContent}
            onIonChange={e => setPostContent(e.detail.value!)}
            placeholder="Edit your post..."
          />
        </IonContent>
        <IonFooter>
          <IonButton onClick={savePost}>Save</IonButton>
          <IonButton onClick={() => setIsModalOpen(false)}>Cancel</IonButton>
        </IonFooter>
      </IonModal>

      <IonAlert
        isOpen={isAlertOpen}
        onDidDismiss={() => setIsAlertOpen(false)}
        header="Success"
        message="Post updated successfully!"
        buttons={['OK']}
      />
    </>
  );
};

export default FeedContainer;