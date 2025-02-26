import { 
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
      navigation.push('/it35-lab/app','forward','replace');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark"> {/* Dark Toolbar */}
          <IonTitle style={{ color: 'white' }}>Login</IonTitle> 
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding' style={{ backgroundColor: '#121212', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30%' }}> 
          <IonAvatar>
            <img alt="User Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>  
        </div>
        
        <IonItem color="dark"> 
          <IonInput label="Username:" placeholder="Enter Username" style={{ color: 'white' }}></IonInput>
        </IonItem>

        <IonItem color="dark"> 
          <IonInput type="password" label="Password:" placeholder="Enter Password" style={{ color: 'white' }}>
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
        </IonItem>

        <IonButton onClick={() => doLogin()} expand="full">
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
