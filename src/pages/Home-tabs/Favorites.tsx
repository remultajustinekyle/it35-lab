import { 
  IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Favorites: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen >
        <IonList>
      <IonItem>
        <IonLabel>ahjshxbj</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>ajhshuiw</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>jbdcdkjuwv</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>hbdvdsvh</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>ghfty6dcu</IonLabel>
      </IonItem>
    </IonList>
   <IonButton>hgjhvjhcugtrd</IonButton>
          
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', }} > Favorites </div>
        </IonContent>
        
      </IonPage>
    );
  };
 export default Favorites;