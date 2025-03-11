
import { 
  IonButton,
  IonButtons,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    useIonRouter
} from '@ionic/react';
import { useState } from 'react';

function Login() {
  const navigation = useIonRouter();

  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setemail] = useState('');
  const [password, setPasword] = useState('');


  const user_email = 'justinekylremulta2@gmail.com';
  const user_pwd = 'baranggan2002';

  const doLogin = () => {

    if (email !== user_email || password !== user_pwd) {
      setShowAlert(true);
      return;
    } else {

      console.log(email);
      console.log(password);

      setShowToast(true);
      setTimeout(() => {

        const doLogin = () => {
          navigation.push('/it35-lab/app', 'forward', 'replace');
        };
        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Login</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
              <IonButton onClick={() => doLogin()} expand="full">
                Login
              </IonButton>
            </IonContent>
          </IonPage>
        );
      });

      export default Login;
    }
  };
}