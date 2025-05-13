import React from 'react';
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
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/react';
import {
  logoGithub,
  mailOutline,
  logoLinkedin
} from 'ionicons/icons';

import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About This App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding about-content">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            {/* Developer Card */}
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard className="about-card glass-card animated-card">
                <IonCardHeader className="ion-text-center">
                  <IonAvatar style={{ margin: '0 auto', width: '80px', height: '80px' }}>
                    <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Developer" />
                  </IonAvatar>
                  <IonCardTitle style={{ marginTop: '10px' }}>
                    Developed by You
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText color="medium">
                    <p>This application was developed as part of an academic requirement in mobile application development.</p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Key Features Card */}
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard className="about-card glass-card animated-card">
                <IonCardHeader>
                  <IonCardTitle>Key Features</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText color="medium">
                    <ul>
                      <li>Schedule Notifications</li>
                      <li>User Login</li>
                      <li>Profile Management</li>
                    </ul>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Technologies Used Card */}
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard className="about-card glass-card animated-card">
                <IonCardHeader>
                  <IonCardTitle>Technologies Used</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText color="medium">
                    <ul>
                      <li>Ionic React</li>
                      <li>Supabase</li>
                      <li>TypeScript</li>
                      <li>Local Storage</li>
                    </ul>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Purpose Card */}
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard className="about-card glass-card animated-card">
                <IonCardHeader>
                  <IonCardTitle>Purpose</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText color="medium">
                    <p>
                      The app demonstrates integrating backend services with a modern front-end framework while maintaining usability and mobile responsiveness.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Social/Contact Buttons */}
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard className="about-card glass-card animated-card">
                <IonCardHeader>
                  <IonCardTitle>Contact</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className="social-buttons">
                    <IonButton fill="clear" color="dark" href="https://github.com/remultajustinekyle" target="_blank">
                      <IonIcon icon={logoGithub} slot="icon-only" />
                    </IonButton>
                    <IonButton fill="clear" color="primary" href="mailto:your@email.com">
                      <IonIcon icon={mailOutline} slot="icon-only" />
                    </IonButton>
                    <IonButton fill="clear" color="tertiary" href="https://linkedin.com/in/yourprofile" target="_blank">
                      <IonIcon icon={logoLinkedin} slot="icon-only" />
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default About;
