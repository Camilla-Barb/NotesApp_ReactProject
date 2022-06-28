// Aggiungo componente Sidebar sottoforma di funzione 
// Voglio gestire diverse funzionalità: 
// notes (default) 
// Aggiungi notes 
// Cancella notes 
// Visualizzare notes attivi 
// Scegliere con un click il note attivo


function Sidebar ({
    notes, 
    onAddNote, 
    onDeleteNote, 
    activeNote, 
    setActiveNote,
}) {

// scelgo tra 2 opzioni l'ultimo che è stato modificato e lo marchio come note attivo
const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified );

return (
     <div className="app-sidebar">
    <div className="app-sidebar-header">
        <h1>Notes</h1>

{/* onAddNote è scritta sottoforma di Arrow Function in App.js in cui vengono passati dei parametri al click del button Add*/}

        <button onClick={onAddNote}>Add</button>
    </div>
    <div className="app-sidebar-notes">
{/* utilizzo il metodo map e arrow function 
utilizzo pseudo classe active per settare al click la note selezionata

*/}
        {sortedNotes.map((note) => (

            <div 

            className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
            onClick = {() => setActiveNote(note.id)}
            >
            <div className="sidebar-note-title">
                <strong>{note.title}</strong>
                <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>

            <p>{note.body && note.body.substr(0,100) + "..."}</p>

            <small className="note-meta">
                Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </small>
        </div>
        ))} 
    </div>
</div>
)}


export default Sidebar;