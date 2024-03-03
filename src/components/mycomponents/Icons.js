import React from 'react'

export const Icons = () => {
    return (
        <ul className="icons">
            <li>
                <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                    <a href="https://www.linkedin.com/in/lucas-rodr%C3%ADguez-de-pena/" target="_blank">
                        <img src={`/icons/linkedin.png`} alt="linkedin.com/in/lucas-rodríguez-de-pena/" title="LinkedIn" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </a>
                </div>
            </li>
            <li>
                <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                    <a href="https://www.t.me/lucasrodriguez_dev" target="_blank">
                        <img src={`/icons/telegram.png`} alt="t.me/lucasrodriguez_dev" title="Telegram" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </a>
                </div>
            </li>
            <li>
                <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                    <a href="https://github.com/lucasrodriguez-dev" target="_blank">
                        <img src={`/icons/github.png`} alt="github.com/lucasrodriguez-dev" title="GitHub" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </a>
                </div>
            </li>
            <li>
                <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                    <a href="mailto:lucascsrodriguez@gmail.com" target="_blank">
                        <img src={`/icons/gmail.png`} alt="lucascsrodriguez@gmail.com" title="Gmail" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </a>
                </div>
            </li>
        </ul>
    )
}
