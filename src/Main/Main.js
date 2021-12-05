import {useState} from 'react';

import './Main.css';

const Main = () => {
    const [isGreetingHidden, setIsGreetingHidden] = useState(false);
    const [isScriptureHidden, setIsScriptureHidden] = useState(false);

    const handleClick = (type) => {
        if (type === 'greeting') {
            setIsGreetingHidden(!isGreetingHidden);
        } else if (type === 'scripture') {
            setIsScriptureHidden(!isScriptureHidden);
        }
    
    }

    return (
        <main>
            <div className="pyro">
                <div className="before"></div>
                <div className="text-box">
                    <p className="typewriter title">Happy Spirthday!</p>
                    <button className="btn fade-in" hidden={isGreetingHidden} onClick={() => {handleClick('greeting')}}>I Love You</button>
                    <div className="greeting-div" hidden={!isGreetingHidden}>
                        <p className="fade-in greeting" hidden={isScriptureHidden}>I'm so grateful that God pulled you out of the world 12 years ago.  I am so proud of the woman of God that you have become.  Thank you for loving me like Jesus on a daily basis.</p>
                        <button className="btn" onClick={() => {handleClick('scripture')}}hidden={isScriptureHidden}>Romans 8:28</button>
                    </div>
                    <div className="scripture-div fade-in" hidden={!isScriptureHidden}>
                        <p className="scripture">And we know that in all things God works for the good of those who love him, who[a] have been called according to his purpose.</p>
                        <span>Romans 8:28</span>
                    </div>              
                </div>
                <div className="after"></div>
            </div>
        </main>
    )
}

export default Main
