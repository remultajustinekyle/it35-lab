import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { heartOutline, codeSlashOutline, brushOutline, lockClosedOutline, cloudOutline } from 'ionicons/icons';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <h2>Our Development Favorites</h2>
        <IonList>
          <IonItem>
            <IonIcon icon={heartOutline} slot="start" color="danger" />
            <IonLabel><strong>Ionic Framework</strong> — for fast, cross-platform app development.</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={codeSlashOutline} slot="start" color="primary" />
            <IonLabel><strong>React</strong> — for building reusable, reactive UI components.</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={cloudOutline} slot="start" color="success" />
            <IonLabel><strong>Supabase</strong> — open source Firebase alternative for backend needs.</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={brushOutline} slot="start" color="tertiary" />
            <IonLabel><strong>Glassmorphism + Minimal UI</strong> — modern, clean design approach.</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={lockClosedOutline} slot="start" color="medium" />
            <IonLabel><strong>Authentication</strong> — secure login and session management.</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
