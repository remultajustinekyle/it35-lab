
import { 
  IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Feed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen={true} className="ion-padding">
          
        <h1>NAARA GYUD</h1>
        <IonButton>Scroll down</IonButton>
        <p>
          Quisque tempus porttitor massa, vel condimentum risus finibus a. Aliquam viverra maximus odio, id ornare justo
          tristique ac. Mauris euismod arcu eget neque sagittis rutrum. Ut vehicula porta lacus nec lobortis. Vestibulum
          et elit ultrices, lacinia metus in, lobortis est. Vivamus nisi justo, venenatis sit amet arcu ac, congue
          faucibus justo. Duis volutpat posuere enim, vel sagittis elit dictum et. Sed et congue mauris. Nam venenatis
          venenatis risus, ac condimentum neque sagittis sed. In eget nulla ultricies urna sollicitudin posuere. Aenean
          sagittis congue mauris. Proin nec libero mi. In hac habitasse platea dictumst. Praesent nunc nulla, dictum id
          molestie sed, pretium vitae turpis.
        </p>
        <p>
          Pellentesque vitae dapibus lacus. Nullam suscipit ornare risus quis ullamcorper. Nullam feugiat, sapien et
          sodales fermentum, risus ligula semper risus, id efficitur ligula augue id diam. Suspendisse lobortis est sit
          amet quam facilisis, ut vestibulum nunc dignissim. Donec at vestibulum magna. Maecenas maximus pretium metus.
          Phasellus congue sapien vel odio imperdiet, nec mollis odio euismod. Sed vel eros ut sapien accumsan
          condimentum vehicula vitae lectus. Donec sed efficitur lorem. Aenean tristique mi libero, eleifend tincidunt
          libero finibus at. Mauris condimentum fermentum rutrum.
        </p>
        <p>
          Nulla tristique ultricies suscipit. Donec non ornare elit. Vivamus id pretium mauris, nec sagittis leo. Fusce
          mattis eget est id sollicitudin. Suspendisse dictum sem magna, in imperdiet metus suscipit et. Suspendisse
          enim enim, venenatis et orci eu, suscipit congue lacus. Praesent vel ligula non eros tempor interdum. Proin
          justo orci, ultricies vitae diam sed, semper consectetur ligula. Aenean finibus ante velit, nec efficitur
          libero cursus cursus. Duis mi nunc, imperdiet sed condimentum vel, porttitor ut lacus. Quisque dui ipsum,
          vehicula sed vestibulum id, semper vel libero. Suspendisse tincidunt mollis condimentum. Nulla facilisi. Etiam
          neque nisl, egestas nec iaculis sed, tristique faucibus sem. Sed mollis dui quis ligula cursus rutrum.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', }} > Feed </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Feed;
