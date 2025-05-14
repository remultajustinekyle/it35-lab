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
import './Favorites.css'; // Custom CSS file for added styles

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="favorites-toolbar">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="favorites-content">
        <h2 className="favorites-heading">Our Development Favorites</h2>
        <IonList className="favorites-list">
          <IonItem className="favorites-item">
            <IonIcon icon={heartOutline} slot="start" className="favorites-icon" />
            <IonLabel className="favorites-label">
              <strong>Ionic Framework</strong> — for fast, cross-platform app development.
            </IonLabel>
          </IonItem>
          <IonItem className="favorites-item">
            <IonIcon icon={codeSlashOutline} slot="start" className="favorites-icon" />
            <IonLabel className="favorites-label">
              <strong>React</strong> — for building reusable, reactive UI components.
            </IonLabel>
          </IonItem>
          <IonItem className="favorites-item">
            <IonIcon icon={cloudOutline} slot="start" className="favorites-icon" />
            <IonLabel className="favorites-label">
              <strong>Supabase</strong> — open source Firebase alternative for backend needs.
            </IonLabel>
          </IonItem>
          <IonItem className="favorites-item">
            <IonIcon icon={brushOutline} slot="start" className="favorites-icon" />
            <IonLabel className="favorites-label">
              <strong>Glassmorphism + Minimal UI</strong> — modern, clean design approach.
            </IonLabel>
          </IonItem>
          <IonItem className="favorites-item">
            <IonIcon icon={lockClosedOutline} slot="start" className="favorites-icon" />
            <IonLabel className="favorites-label">
              <strong>Authentication</strong> — secure login and session management.
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
