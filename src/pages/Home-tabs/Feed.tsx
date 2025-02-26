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
        <IonToolbar color="dark"> {/* Dark toolbar */}
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle style={{ color: 'white' }}>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding" style={{ backgroundColor: '#121212', color: 'white' }}>
        <h1 style={{ textAlign: 'center' }}>NAARA GYUD</h1>
        <IonButton expand="full">Scroll down</IonButton>
        
        <p>ahsjhdvewhvdhewkf</p>
        <p>vxvjbciwedbwe</p>
        <p>sxnbkjwqbxkqkjw</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}> 
          <p>Feed</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
