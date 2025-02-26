import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonSearchbar, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark"> {/* Dark toolbar */}
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle style={{ color: 'white' }}>Search</IonTitle> {/* White title */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ backgroundColor: '#121212', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white' }}>
          Search
        </div>
      </IonContent>
      <IonHeader>
        <IonToolbar color="dark">
          <IonSearchbar color="light"></IonSearchbar> {/* Light search bar for contrast */}
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Search;
