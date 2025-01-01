import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ai_bot.module.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export const AIBot = () => {
    const [showPopup, setShowPopup] = useState(false);

    const clickPopup = () => {
        setShowPopup(!showPopup);
    }

    const closePopup = () => {
        setShowPopup(false);
    }

    return (
        <section className={styles.ai_container}>
            <div className={styles.ai_image} onClick={clickPopup}>
                <img src={getImageUrl('ai_bot/ai_bot.png')} alt="AI Bot" />
            </div>
            {showPopup && (
                <div className={styles.PopUp}>
                    <div className={styles.PopUpContent}>
                        <button type="button" className='btn-close' onClick={closePopup}></button>
                        <div className={styles.chatbox}>
                            {/* Your AI chat implementation here */}
                            <h2>AI Chat</h2>
                            <div className={styles.chatMessages}>
                                {/* Render chat messages */}
                                <p><strong>Bot:</strong> How can I assist you today?</p>
                            </div>
                            <textarea className={styles.inputMessage} placeholder="Type a message..."></textarea>
                            <button className={styles.sendButton}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

