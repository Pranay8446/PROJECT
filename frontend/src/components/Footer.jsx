import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-zinc-900 text-white p-6'>
      <div className="flex flex-col gap-6 md:flex-row justify-between">
        <div>
          <h1 className='text-2xl mb-2 font-semibold'>Our Services</h1>
          <ul>
            <Link to="/iron-doors" className='text-lg block mb-1'>Iron Doors</Link>
            <Link to="/iron-windows" className='text-lg block mb-1'>Iron Windows</Link>
            <Link to="/iron-stairs" className='text-lg block mb-1'>Iron Stairs</Link>
            <Link to="/iron-shades" className='text-lg block mb-1'>Iron Shades</Link>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl mb-3 font-semibold'>Visit Store</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d553.871539105039!2d77.74943317028234!3d20.952967570799387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a3243fdc8be9%3A0x15c18b4991758424!2sShree%20sarswati%20welding%20works!5e0!3m2!1sen!2sin!4v1736843184355!5m2!1sen!2sin"
            width="full"
            height="full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className='w-full'
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className='mt-3'>
                <strong>Address:</strong> Shree Krishna Nagar, Behind V.M.V College, Amravati, Maharashtra, India
            </p>
        </div>
        <div >
          <h1 className='text-2xl mb-2 font-semibold'>Contact Us</h1>
          <p><strong>Email:</strong> prathameshawaghad@gmail.com</p>
            <p class="note">(Please do not send service/work enquiry on this mail. Click service enquiry on top of the
                page for enquiries.)</p>
            <p className="font-family: 'Courier New', Courier, monospace;"><strong>Phone:</strong> +919890679833</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
