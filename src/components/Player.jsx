import { useState } from "react";

export default function Player ({initialName, symbol}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    // Edit押下後、setIsEditingがfalse→true
    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }
    // 変数playerName
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // ボタンのデフォルト：editに
    // let btnCaption = 'Edit';
    // isEditingが存在しているとき、inputタグで編集、ボタンを保存へ変更
    if(isEditing){
        editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handleChange}/>;
        // btnCaption = 'Save';
    }
    return (
        <li>
            <span>
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}