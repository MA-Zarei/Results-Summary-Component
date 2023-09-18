import React from "react";
import '../Assests/Styles/summary.css'
import ReactionIcon from '../Assests/icons/icon-reaction.svg'
import MemoryIcon from '../Assests/icons/icon-memory.svg'
import VerbalIcon from '../Assests/icons/icon-verbal.svg'
import VisualIcon from '../Assests/icons/icon-visual.svg'
import {motion} from 'framer-motion'


const Summary = () =>{
    const gradientAnim={
        initial:{
            '--gradient-start':'hsl(224, 30%, 27%)',
            '--gradient-end':'hsl(224, 30%, 27%)',
        },
        hovered:{
            '--gradient-start':'hsl(252, 100%, 67%)',
            '--gradient-end':'hsl(241, 81%, 54%)',
        }
    }

    return(
        <div className="sumDiv">
            <h2>
                Summary
            </h2>
            <div className="reaction line">
                <span className="reactionStat">
                    <img src={ReactionIcon} alt="icon-reaction" />
                    Reaction
                </span>
                <span>
                    <span className="score">
                        80
                    </span>
                    <span className="defScore">
                        / 100
                    </span>
                </span>
            </div>
            <div className="memory line">
                <span className="memoStat">
                    <img src={MemoryIcon} alt="icon-memory" />
                    Memory
                </span>
                <span>
                    <span className="score">
                        92
                    </span>
                    <span className="defScore">
                        / 100
                    </span>
                </span>
            </div>
            <div className="verbal line">
                <span className="verStat">
                    <img src={VerbalIcon} alt="icon-verbal" />
                    Verbel
                </span>
                <span>
                    <span className="score">
                        61
                    </span>
                    <span className="defScore">
                        / 100
                    </span>
                </span>
            </div>
            <div className="visual line">
                <span className="visStat">
                    <img src={VisualIcon} alt="icon-reaction" />
                    Visual
                </span>
                <span>
                    <span className="score">
                        72
                    </span>
                    <span className="defScore">
                        / 100
                    </span>
                </span>
            </div>
            <motion.span 
            className="btn"
            initial='initial'
            whileHover="hovered"
            variants={gradientAnim}
            transition={{duration:0.3}}
            style={{
                background: 'linear-gradient(to bottom, var(--gradient-start), var(--gradient-end)'
            }}
            >
                Continue
            </motion.span>
        </div>
    )
}

export default Summary;