
import './App.css';
import { Piano, KeyboardShortcuts, MidiNumbers  } from 'react-piano'
import 'react-piano/dist/styles.css';
import * as Tone from 'tone'
import { Distortion } from 'tone';
import {useState} from "react"


function App() {
  const [dist, setDist] = useState(0)
  const [feedBack, setFeedBack] = useState(0)
  const [reverb, setReverb] = useState(0)
  const synth = new Tone.Synth().toDestination();
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });
  const distortion = new Tone.Distortion(dist).toDestination();
  const feedbackDelay = new Tone.FeedbackDelay(feedBack, 0.5).toDestination();
  const Reverb = new Tone.Reverb(1.5, reverb).toDestination();

  if (dist > 0) {
    synth.connect(distortion)
  }
  if (feedBack > 0) {
    synth.connect(feedbackDelay)
  }
  if (reverb > 0) {
    synth.connect(Reverb)
  }


  function handleChange(e) {
    setDist(e.target.value)
  }

  function handleFeedChange(e) {
    setFeedBack(e.target.value)
  }

  function handleReverbChange(e) {
    setReverb(e.target.value)
  }

  function handleSubmit() {
    
  }


  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Distortion</label>
          <br/>
          <input type={"text"} value={dist} onChange={handleChange}/>
        </div>
        <div>
          <label>FeedBach Delay</label>
          <br/>
          <input type={"text"} value={feedBack} onChange={handleFeedChange}/>
        </div>
        <div>
          <label>Reverb</label>
          <br/>
          <input type={"text"} value={reverb} onChange={handleReverbChange}/>
        </div>
        <input type={"submit"} value={"Save"}/>
      </form>
      <Piano 
      noteRange={{ first: 48, last: 77 }}
      playNote={(midiNumber) => {
        // Play a given note - see notes belowsws
        console.log(dist)
        switch(midiNumber) {
          case 48:
            synth.triggerAttackRelease("C4", "8n");
            break;
          case 49:
            synth.triggerAttackRelease("C#4", "8n");
            break;
          case 50:
            synth.triggerAttackRelease("D4", "8n");
            break;
          case 51:
            synth.triggerAttackRelease("D#4", "8n");
            break;
          case 52:
            synth.triggerAttackRelease("E4", "8n");
            break;
          case 53:
            synth.triggerAttackRelease("F4", "8n");
            break;
          case 54:
            synth.triggerAttackRelease("F#4", "8n");
            break;
          case 55:
            synth.triggerAttackRelease("G4", "8n");
            break;
          case 56:
            synth.triggerAttackRelease("G#4", "8n");
            break;
          case 57:
            synth.triggerAttackRelease("A4", "8n");
            break;  
          case 58:
            synth.triggerAttackRelease("A#4", "8n");
            break;
          case 59:
            synth.triggerAttackRelease("B4", "8n");
            break;
          case 60:
            synth.triggerAttackRelease("C5", "8n");
            break;
        }
        console.log(midiNumber)
      }}
      stopNote={(midiNumber) => {
        // Stop playing a given note - see notes below
      }}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
      
      />
    </div>
  );
}

export default App;
