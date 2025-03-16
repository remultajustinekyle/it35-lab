import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter
} from '@ionic/react';
import { useState } from 'react';
import { logInOutline } from 'ionicons/icons';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user_email = 'dayde@gmail.com';
  const user_pwd = '095640';

  const doLogin = () => {
    if (email !== user_email || password !== user_pwd) {
      setShowAlert(true);
      return;
    } else {
      setTimeout(() => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
      }, 1500);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ backgroundColor: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <IonAvatar style={{ width: '100px', height: '100px', marginBottom: '20px' }}>
            <img alt="User Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>

          <div style={{ width: '90%', maxWidth: '400px', padding: '20px', background: 'white', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={e => setEmail(e.detail.value!)}
                placeholder="Enter your email"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={e => setPassword(e.detail.value!)}
                placeholder="Enter your password"
              >
                <IonInputPasswordToggle slot="end" />
              </IonInput>
            </IonItem>

            <IonButton expand="full" onClick={doLogin} style={{ marginTop: '20px' }}>
              <IonIcon slot="start" icon={logInOutline} />
              Login
            </IonButton>
          </div>
        </div>

        {showAlert && (
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Login failed"
            message="Username or password is incorrect"
            buttons={[{ text: 'OK', handler: () => setShowAlert(false) }]}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Login;
