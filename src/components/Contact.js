import React from "react";

function Contact(){
    return(
        <>
        <div className="contact">
            <ul>
                <li>Numéro de Téléphone:0000000000</li>
                <li>adresse: 6 rue Léon Bernier, Aubry</li>
                <li>email: pizzarossi@gmail.com</li>
            </ul>
        </div>

        <div className="hours">
            <ul>
                <li>Lundi:    8h00-00h00</li>
                <li>Mardi:    8h00-00h00</li>
                <li>Mercredi: 8h00-00h00</li>
                <li>Jeudi:    8h00-02h00</li>
                <li>Vendredi: 8h00-02h00</li>
                <li>Samedi:   11h00-02h00</li>
                <li>Dimanche: 11h00-23h00</li>

            </ul>
        </div>
        </>
    )
}

export default Contact;