import './Medies.css'

const Medies = () => {
    return(
        <>
            <header>
        <nav>
            <div class="logo">
                <img src="logo.png" alt="MedCare Logo" v/>  </div>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Doctors</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div class="hero">
            <h1 class="heading">Your Health is Our Priority</h1>
            <p class="headingdesc">Providing compassionate and comprehensive medical care.</p>
            <button>Learn More</button>
        </div>
    </header>

    <main>
        <section class="services">
            <h2>Our Services</h2>
            <div class="service-grid">
                <div class="service">
                    <i class="fas fa-stethoscope"></i>
                    <h3>General Checkup</h3>
                    <p>Comprehensive health assessments for all ages.</p>
                </div>
                <div class="service">
                    <i class="fas fa-heartbeat"></i>
                    <h3>Cardiology</h3>
                    <p>Expert care for heart health and related conditions.</p>
                </div>
                <div class="service">
                    <i class="fas fa-hospital-alt"></i>
                    <h3>Emergency Care</h3>
                    <p>24/7 emergency services for critical situations.</p>
                </div>
                <div class="service">
                    <i class="fas fa-x-ray"></i>
                    <h3>Radiology</h3>
                    <p>Advanced imaging and diagnostic services.</p>
                </div>
                <div class="service">
                    <i class="fas fa-user-md"></i>
                    <h3>Specialist Consultations</h3>
                    <p>Expert advice from experienced specialists.</p>
                </div>
                <div class="service">
                    <i class="fas fa-notes-medical"></i>
                    <h3>Medical Counseling</h3>
                    <p>Confidential support and guidance for health concerns.</p>
                </div>
            </div>
        </section>

        <section class="doctors">
            <h2>Our Doctors</h2>
            <div class="doctor-grid">
                <div class="doctor">
                    <img src="" alt="Doctor 1" />
                    <h3>Dr. Jane Doe</h3>
                    <p>Cardiologist</p>
                </div>
                <div class="doctor">
                    <img src="" alt="Doctor 2" />
                    <h3>Dr. John Smith</h3>
                    <p>General Physician</p>
                </div>
                </div>
        </section>

        <section class="about-us">
            <h2>About Us</h2>
            <p>MedCare is committed to providing high-quality, patient-centered care. Our team of experienced medical professionals is dedicated to improving the health and well-being of our community.</p>
        </section>

        <section class="contact">
            <h2>Contact Us</h2>
            <p>123 Main Street, Anytown, CA 91234</p>
            <p>Phone: (555) 555-5555</p>
            <p>Email: info@medcare.com</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 MedCare</p>
    </footer>
        </>
    )
}
export default Medies