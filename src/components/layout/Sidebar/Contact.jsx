import React from 'react'
import ContactList from './ContactList'

export default () =>
    <div>
        <ContactList label="E-mail:" text="asd@asd.com" link="mailto:asd@asd.com" />
        <ContactList label="Linkedin:" text="my Linkedin" link="https://www.linkedin.com/in/luiz-henrique-40b7b5171/" />
        <ContactList label="Github:" text="my Github" link="https://github.com/LuizHenrique05" />
        <ContactList label="Instagram:" text="my Instagram" link="https://www.instagram.com/luiz54henrique/" />
    </div>