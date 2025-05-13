import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonText, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';

import { checkmarkCircleOutline } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard color="light" style={{ border: '1px solid #ccc' }}>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center" style={{ color: '#3880ff', fontWeight: 'bold' }}>
              About This App
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="dark">
              <p>
                <strong style={{ color: '#3880ff' }}>This application</strong> is built using the Ionic Framework with React, allowing it to run seamlessly on both Android and iOS devices. It's designed to be lightweight, responsive, and easy to use, offering a modern and efficient mobile experience.
              </p>
              <p>
                The app demonstrates the power of cross-platform development and includes a variety of features to enhance productivity and user engagement.
              </p>
            </IonText>

            <IonList>
              {[
                'User Authentication and Secure Login',
                'Dynamic and Interactive UI with React Components',
                'Responsive Design for All Devices',
                'Dark Mode Support',
                'Profile Picture Upload & Management',
                'Real-time Data with Supabase/Firebase Integration',
                'Offline Access & Local Storage',
                'Modular Code Structure for Easy Maintenance',
              ].map((feature, index) => (
                <IonItem key={index} lines="none">
                  <IonIcon
                    icon={checkmarkCircleOutline}
                    slot="start"
                    color="primary"
                  />
                  <IonLabel className="ion-text-wrap">{feature}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
