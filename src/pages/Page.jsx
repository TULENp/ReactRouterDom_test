import React from "react";
import {Link, useLocation} from 'react-router-dom';

export default function Page() {
    const qwe = window.location.pathname;
    const path = qwe.split("/").reverse()[0];
    return (
        <section>
            <button><Link to={'/'} >Back</Link></button>
            <p>Section Location</p>
        </section>
    )
}