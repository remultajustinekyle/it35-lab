import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter,
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{
          backgroundColor: '#ffffff', // pure white background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url("your-background-image-url.jpg")', // Optional: add a background image
        }}
      >
        <div
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Reduce opacity for visible background
            borderRadius: '20px',
            padding: '30px 20px',
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '15%',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
            color: 'white',
          }}
        >
          <IonAvatar
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              margin: 'auto',
              marginBottom: '20px',
              border: '2px solid white',
              overflow: 'hidden',
            }}
          >
            {/* Optional: Logo goes here */}
          </IonAvatar>

          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>USER LOGIN</h2>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            style={{ color: 'white' }}
          />
          <IonInput
            style={{ marginTop: '15px', color: 'white' }}
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton
            style={{ marginTop: '20px' }}
            onClick={doLogin}
            expand="full"
            shape="round"
            color="light"
          >
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/register"
            expand="full"
            fill="clear"
            shape="round"
            style={{ marginTop: '10px', color: 'white' }}
          >
            Don’t have an account? Register here
          </IonButton>
        </div>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Login Failed"
          message={errorMessage}
          buttons={['OK']}
        />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
