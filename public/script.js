const abovePiano = `
<h1>PLAY PIANO WITH ME</h1>
`;

const belowPiano = `
<select id="inputs">
    <option value="default" selected>Midi Inputs</option>
</select>
`;

const noteToNum = {
    A0: "21",
    A1: "33",
    A2: "45",
    A3: "57",
    A4: "69",
    A5: "81",
    A6: "93",
    A7: "105",
    A8: "117",
    "A-1": "9",
    Ab0: "20",
    Ab1: "32",
    Ab2: "44",
    Ab3: "56",
    Ab4: "68",
    Ab5: "80",
    Ab6: "92",
    Ab7: "104",
    Ab8: "116",
    "Ab-1": "8",
    B0: "23",
    B1: "35",
    B2: "47",
    B3: "59",
    B4: "71",
    B5: "83",
    B6: "95",
    B7: "107",
    B8: "119",
    "B-1": "11",
    Bb0: "22",
    Bb1: "34",
    Bb2: "46",
    Bb3: "58",
    Bb4: "70",
    Bb5: "82",
    Bb6: "94",
    Bb7: "106",
    Bb8: "118",
    "Bb-1": "10",
    C0: "12",
    C1: "24",
    C2: "36",
    C3: "48",
    C4: "60",
    C5: "72",
    C6: "84",
    C7: "96",
    C8: "108",
    C9: "120",
    "C-1": "0",
    D0: "14",
    D1: "26",
    D2: "38",
    D3: "50",
    D4: "62",
    D5: "74",
    D6: "86",
    D7: "98",
    D8: "110",
    D9: "122",
    "D-1": "2",
    Db0: "13",
    Db1: "25",
    Db2: "37",
    Db3: "49",
    Db4: "61",
    Db5: "73",
    Db6: "85",
    Db7: "97",
    Db8: "109",
    Db9: "121",
    "Db-1": "1",
    E0: "16",
    E1: "28",
    E2: "40",
    E3: "52",
    E4: "64",
    E5: "76",
    E6: "88",
    E7: "100",
    E8: "112",
    E9: "124",
    "E-1": "4",
    Eb0: "15",
    Eb1: "27",
    Eb2: "39",
    Eb3: "51",
    Eb4: "63",
    Eb5: "75",
    Eb6: "87",
    Eb7: "99",
    Eb8: "111",
    Eb9: "123",
    "Eb-1": "3",
    F0: "17",
    F1: "29",
    F2: "41",
    F3: "53",
    F4: "65",
    F5: "77",
    F6: "89",
    F7: "101",
    F8: "113",
    F9: "125",
    "F-1": "5",
    G0: "19",
    G1: "31",
    G2: "43",
    G3: "55",
    G4: "67",
    G5: "79",
    G6: "91",
    G7: "103",
    G8: "115",
    G9: "127",
    "G-1": "7",
    Gb0: "18",
    Gb1: "30",
    Gb2: "42",
    Gb3: "54",
    Gb4: "66",
    Gb5: "78",
    Gb6: "90",
    Gb7: "102",
    Gb8: "114",
    Gb9: "126",
    "Gb-1": "6"
}

const numToNote = {
24: "C1",
25: "Db1",
26: "D1",
27: "Eb1",
28: "E1",
29: "F1",
30: "Gb1",
31: "G1",
32: "Ab1",
33: "A1",
34: "Bb1",
35: "B1",
36: "C2",
37: "Db2",
38: "D2",
39: "Eb2",
40: "E2",
41: "F2",
42: "Gb2",
43: "G2",
44: "Ab2",
45: "A2",
46: "Bb2",
47: "B2",
48: "C3",
49: "Db3",
50: "D3",
51: "Eb3",
52: "E3",
53: "F3",
54: "Gb3",
55: "G3",
56: "Ab3",
57: "A3",
58: "Bb3",
59: "B3",
60: "C4",
61: "Db4",
62: "D4",
63: "Eb4",
64: "E4",
65: "F4",
66: "Gb4",
67: "G4",
68: "Ab4",
69: "A4",
70: "Bb4",
71: "B4",
72: "C5",
73: "Db5",
74: "D5",
75: "Eb5",
76: "E5",
77: "F5",
78: "Gb5",
79: "G5",
80: "Ab5",
81: "A5",
82: "Bb5",
83: "B5",
84: "C6",
85: "Db6",
86: "D6",
87: "Eb6",
88: "E6",
89: "F6",
90: "Gb6",
91: "G6",
92: "Ab6",
93: "A6",
94: "Bb6",
95: "B6",
96: "C7",
97: "Db7",
98: "D7",
99: "Eb7",
100: "E7",
101: "F7",
102: "Gb7",
103: "G7",
104: "Ab7",
105: "A7",
106: "Bb7",
107: "B7",
}

let lastSelected = null;

let pianoGui = "";

const keytokey = {
    a: 'C',
    s: 'D',
    d: 'E',
    f: 'F',
    g: 'G',
    h: 'A',
    j: 'B',
    w: 'Db',
    e: 'Eb',
    t: 'Gb',
    y: 'Ab',
    u: 'Bb'
};

const sharpstoflats = {
    "C#": "Db",
    "D#": "Eb",
    "F#": "Gb",
    "G#": "Ab",
    "A#": "Bb",
};

const pianoGuiNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

let octave = 4;

let velocity = 84;

const tone =_tone_0010_SBLive_sf2;
const AudioContextFunc = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContextFunc();
const player=new WebAudioFontPlayer();
const notes = [];
const pedalNotes = [];
const inputArr = [];
let pedal = false;
player.loader.decodeAfterLoading(audioContext, '_tone_0010_SBLive_sf2');
const noteOn = (pitch, velocity) => {
    noteOff(pitch);
    if (Object.keys(numToNote).includes(pitch.toString())) {
        if (document.getElementById(numToNote[pitch] + "user").className === "whiteuser") {
            document.getElementById(numToNote[pitch] + "user").style.background = "#DDD";
        } else if (document.getElementById(numToNote[pitch] + "user").className === "blackuser") {
            document.getElementById(numToNote[pitch] + "user").style.background = "#444";
        }
    }
	var envelope = player.queueWaveTable(audioContext, audioContext.destination, tone, 0, pitch, 123456789, velocity / 100);
	notes.push({
		pitch: pitch,
		envelope: envelope
	});
}
const noteOff = (pitch) => {
	for (let i = 0; i < notes.length; i++) {
		if (notes[i].pitch == pitch) {
			if (notes[i].envelope && pedal === false) {
				notes[i].envelope.cancel();
			} else if (pedal && notes[i].envelope) {
				pedalNotes.push(notes[i]);
            }
            if (Object.keys(numToNote).includes(pitch.toString())) {
                if (document.getElementById(numToNote[pitch] + "user").className === "whiteuser") {
                    document.getElementById(numToNote[pitch] + "user").style.background = "white";
                } else if (document.getElementById(numToNote[pitch] + "user").className === "blackuser") {
                    document.getElementById(numToNote[pitch] + "user").style.background = "black";
                }
            }
			notes.splice(i, 1);
			return;
		}
	}
}
const onMIDISuccess = (midiAccess) => {
	console.log(midiAccess);
	midiAccess.inputs.forEach(input => {
        inputArr.push(input);
        document.getElementById('inputs').insertAdjacentHTML('beforeend', `<option value="${input.name}">${input.name}</option>`)
    })
    if (inputArr.length > 0) {
        document.getElementById('inputs').addEventListener('change', e => {
            if (document.getElementById('inputs').options[document.getElementById('inputs').selectedIndex].value !== "default") {
                inputArr.forEach(el => {
                    if (document.getElementById('inputs').options[document.getElementById('inputs').selectedIndex].value === el.name) {
                        el.onmidimessage = (event) => {
                            switch (event.data[0]) {
                                case 144:
                                    noteOn(event.data[1], event.data[2]);
                                    break;
                                case 128:
                                    noteOff(event.data[1]);
                                    break;
                                case 176: case 177: case 178: case 179:
                                    if (event.data[1] === 64) {
                                        if (event.data[2] > 0) {
                                            pedal = true;
                                        } else {
                                            pedal = false;
                                            pedalNotes.forEach((ele, i, obj) => {
                                                ele.envelope.cancel();
                                                obj.splice(i, 1);
                                            })
                                        }
                                    }
                                    break;
                                case 69:
                                    if (event.data[1] === 69 && event.data[2] === 69) {
                                        alert("Nice");
                                    }
                            }
                        }
                    } else {
                        el.onmidimessage = null;
                    }
                })
                
            }
        });
    } else {
        document.getElementById('inputs').disabled = "disabled";
        document.getElementById('inputs').options[0].text = "No MIDI Inputs";
    }
}
const onMIDIFailure = () => {
    console.log('Oops! Something Went Wrong With MIDI');
    document.getElementById('inputs').disabled = "disabled";
        document.getElementById('inputs').options[0].text = "MIDI Input Unavailable";
}

const createPianoGuest = () => {
    [...Array(7).keys()].forEach(num => {
        pianoGuiNotes.forEach(note => {
            let sharp = true;
            if (note === "E" || note === "B") {
                sharp = false;
            }
            pianoGui += `<div class="whiteguest" id="${note + (num + 1) + "guest"}">`;
            if (sharp) {
                pianoGui += `<div class="blackguest" id="${sharpstoflats[note + "#" ] + (num + 1) + "guest"}"></div>`;
            }
            pianoGui += "</div>"
        })
    })
    document.getElementById('pianoguest').innerHTML = pianoGui;
}

const createPianoUser = () => {
    pianoGui = "";
    [...Array(7).keys()].forEach(num => {
        pianoGuiNotes.forEach(note => {
            let sharp = true;
            if (note === "E" || note === "B") {
                sharp = false;
            }
            pianoGui += `<div class="whiteuser" id="${note + (num + 1)+ "user"}">`;
            if (sharp) {
                pianoGui += `<div class="blackuser" id="${sharpstoflats[note + "#" ] + (num + 1) + "user"}"></div>`;
            }
            pianoGui += "</div>"
        })
    })
    document.getElementById('pianouser').innerHTML = pianoGui;
    let guiNotes = document.getElementById('pianouser').getElementsByTagName("*");
    for (let i = 0; i < guiNotes.length; i++) {
        guiNotes[i].addEventListener('mousedown', event => {
            event.stopPropagation();
            if (!event.repeat) {
                noteOn(parseInt(noteToNum[guiNotes[i].id.replace("user", "")]), 90);
            }
        })
        guiNotes[i].addEventListener('mouseup', event => {
            event.stopPropagation();
            if (!event.repeat) {
                noteOff(parseInt(noteToNum[guiNotes[i].id.replace("user", "")]));
            }
        })
        guiNotes[i].addEventListener('mouseleave', event => {
            event.stopPropagation();
            if (!event.repeat) {
                noteOff(parseInt(noteToNum[guiNotes[i].id.replace("user", "")]));
            }
        })
    }
}

const createKeyboardInput = () => {
    document.addEventListener('keydown', event => {
        if (!event.repeat) {
            if (event.key === "x") {
                if (!(octave === 6)) {
                    octave++;
                }
                console.log(octave);
            } else if (event.key === "z") {
                if (!(octave === 1)) {
                    octave = octave - 1;
                }
                console.log(octave);
            } else if (event.key === "c") {
                if (!(velocity <= 12)) {
                    velocity = velocity - 12;
                }
                console.log(velocity);
            } else if (event.key === "v") {
                if (!(velocity >= 120)) {
                    velocity = velocity + 12;
                }
                console.log(velocity);
            } else if (event.key === " ") {
                pedalNotes.forEach((el, i, obj) => {
                    el.envelope.cancel();
                    obj.splice(i, 1);
                })
                pedal = true;
            } else if (event.key === "k") {
                    noteOn(parseInt(noteToNum["C" + (octave + 1)]), velocity);
            } else if (event.key === "o") {
                noteOn(parseInt(noteToNum["Db" + (octave + 1)]), velocity);
            } else if (event.key === "l") {
                noteOn(parseInt(noteToNum["D" + (octave + 1)]), velocity);
            } else if (event.key === "p") {
                noteOn(parseInt(noteToNum["Eb" + (octave + 1)]), velocity);
            } else if (event.key === ";") {
                noteOn(parseInt(noteToNum["E" + (octave + 1)]), velocity);
            } else if (event.key === "'") {
                noteOn(parseInt(noteToNum["F" + (octave + 1)]), velocity);
            } else {
                Object.keys(keytokey).forEach(key => {
                    if (event.key === key) {
                            noteOn(parseInt(noteToNum[keytokey[key] + octave]), velocity);
                    }
                })
            }
        }
    })
    document.addEventListener('keyup', event => {
        if (!event.repeat) {
            if (event.key === "k") {
                    noteOff(parseInt(noteToNum["C" + (octave + 1)]));
            } else if (event.key === "o") {
                noteOff(parseInt(noteToNum["Db" + (octave + 1)]));
            } else if (event.key === "l") {
                noteOff(parseInt(noteToNum["D" + (octave + 1)]));
            } else if (event.key === "p") {
                noteOff(parseInt(noteToNum["Eb" + (octave + 1)]));
            } else if (event.key === ";") {
                noteOff(parseInt(noteToNum["E" + (octave + 1)]));
            } else if (event.key === "'") {
                noteOff(parseInt(noteToNum["F" + (octave + 1)]));
            } else if (event.key === " ") {
                pedal = false;
                pedalNotes.forEach((el, i, obj) => {
                    el.envelope.cancel();
                    obj.splice(i, 1);
                })
                setTimeout(() => {
                    pedalNotes.forEach((el, i, obj) => {
                        el.envelope.cancel();
                        obj.splice(i, 1);
                    })
                }, 100)
            } else {
                Object.keys(keytokey).forEach(key => {
                    if (event.key === key) {
                            noteOff(parseInt(noteToNum[keytokey[key] + octave]));
                    }
                })
            }
        }
    })
}

const createInfoModal = () => {
    document.body.insertAdjacentHTML('beforeend', `
<button id="modalbutton">How To</button>
<div id="infomodal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
            <h2>How To Play</h2>
        </div>
        <div class="modal-body">
            <p>You have three playing options.</p>
            <ol>
                <li>Click the notes on the piano on your side (the white side)</li>
                <li>Use your computer keyboard to play the notes</li>
                <li>Connect a midi controller (restart the page if you don't see it show up) and select it in the select box at the top</li>
            </ol>
        </div>
        <div class="modal-footer">
            <h3>Modal Footer</h3>
        </div>
    </div>
</div>
    `);
    let modal = document.getElementById("infomodal");
    let btn = document.getElementById("modalbutton");
    let span = document.getElementsByClassName("close")[0];
    btn.addEventListener('click', () => {
        modal.style.display = "block";
    });
    span.addEventListener('click', () => {
        modal.style.display = "none";
    });
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

const start = () => {
    document.getElementById('startbutton').remove();
    document.body.insertAdjacentHTML('afterbegin', abovePiano);
    createPianoGuest();
    createPianoUser();
    document.body.insertAdjacentHTML('beforeend', belowPiano);
    createKeyboardInput();
    createInfoModal();
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    } else {
        console.log('WebMIDI is not supported in this browser.');
        document.getElementById('inputs').disabled = "disabled";
        document.getElementById('inputs').options[0].text = "MIDI Input Not Supported";
    }
};

const MIDIState = () => {
    
}

const keyboardState = () => {
    
}

document.getElementById('startbutton').addEventListener('click', start);