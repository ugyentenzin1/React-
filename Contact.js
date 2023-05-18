function Contact() {
    const contact = {
        textDecoration: 'underline',
        fontsize:'60px',
        fontWeight: 600,
        color:'blue'
    }

    const details = {
        marginTop: '16px'
    }

    return(
        <div>
            <h1 style={contact}>Contact Us Baby</h1>
            <details>
                <summary>What is Your Name?</summary>
                <p>The most Used in Web Developement</p>
            </details>
            <details style={details}>
                <summary>What is Your Name?</summary>
                <p>The most Used in Web Developement</p>
            </details>
            <details style={details}>
                <summary>What is Your Name?</summary>
                <p>The most Used in Web Developement</p>
            </details>  <details style={details}>
            <summary>What is Your Name?</summary>
            <p>The most Used in Web Developement</p>
        </details>  <details style={details}>
            <summary>What is Your Name?</summary>
            <p>The most Used in Web Developement</p>
        </details>

        </div>
    )
}

export default Contact;
