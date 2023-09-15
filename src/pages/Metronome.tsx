import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MetronomeContainer from '../components/MetronomeContainer';
import ImageSlideshow from '../components/ImageSlideshow';

const Metronome: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Metronome</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Metronome</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <MetronomeContainer name="Metronome page" />

                {/* Wrap ImageSlideshow in a centered container */}
                <div className="centered-container">
                    <ImageSlideshow />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Metronome;