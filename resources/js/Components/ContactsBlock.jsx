import "../../css/ContactsBlock.css"

import discord from "../../images/discord.webp"
import linkedin from "../../images/linkedin.webp"
import telegram from "../../images/telegram.webp"

const ContactsBlock = () => {
    return (
        <div className="contacts">
            <div className="contacts_head">
                <h2 className="px32 bold"><span className="purple">#</span>contacts</h2>
                <hr className="contacts_head-hr"/>
            </div>
            <div className="contacts_body">
                <h3 className="gray px16 normal">
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me.
                </h3>
                <div className="contacts_body-info">
                    <h3 className="px16">Contact me here:</h3>
                    <div className="contacts_body-info_content">
                        <a href="https://discordapp.com/users/406371638339174402" className="contacts_body-info_content-item">
                            <img src={discord} alt="" className="contacts_body-info_content-item_img"/>
                            <h4 className="gray normal px16">
                                potter.bl
                            </h4>
                        </a>
                        <a href="https://www.linkedin.com/in/potterbl/" className="contacts_body-info_content-item">
                            <img src={linkedin} alt="" className="contacts_body-info_content-item_img"/>
                            <h4 className="gray normal px16">
                                Vladislav Plisko
                            </h4>
                        </a>
                        <a href="https://t.me/potter_bl" className="contacts_body-info_content-item">
                            <img src={telegram} alt="" className="contacts_body-info_content-item_img"/>
                            <h4 className="gray normal px16">
                                Vladislav Plisko
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsBlock;
