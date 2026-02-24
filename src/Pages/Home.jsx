import { Link } from "react-router"

const Home = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className="text-4xl font-bold flex justify-center align-center pt-[50px]">Welcome To<span className="pl-[8px] text-[oklch(50.5%_0.213_27.518)]"> Invoice Builder</span></h1>  
                    <h2 className="text-xl font-bold flex justify-center align-center pt-[20px]">Simple & Professional Invoice Management</h2>
                </div>
                <div className="flex gap-[5px] w-fit mx-auto px-[25px] rounded-2xl justify-center items-center h-[80px] shadow-xl border border-gray-500/30 mt-[50px] bg-white ">
                    <Link to={"create"}>
                    <button className="border border-gray-500/30 px-4 py-1 rounded-md text-[18px] text-white font-bold bg-[oklch(44.8%_0.119_151.328)] hover:scale-110 transition-all duration-150 ease-in-out">Click</button></Link><p className="text-[22px] font-semibold">here to Create New Invoice!!</p>
                </div>
                <div className="flex justify-center mx-[50px] mt-[60px] gap-[30px]">
                    <div className="flex-1 border border-gray-500/30 rounded-xl p-[15px] bg-white shadow-inner shadow-black/5">
                        <h1 className="font-bold text-3xl text-center" id="about">About</h1>
                        <div>
                        <h2 className="font-semibold text-[22px] pt-[25px]">What is Invoice Builder?</h2>
                            <p className="text-[18px]">Invoice Builder is a web-based application that helps users create, manage, and export professional invoices quickly and easily.</p>
                        </div>
                        
                        <div>
                            <h2 className="font-semibold text-[22px] pt-[25px]">Who is it for?</h2>
                            <p className="text-[18px]">Designed for freelancers, small businesses, startups, and developers who need a fast and reliable invoicing solution.</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[22px] pt-[25px]">Why use this app?</h2>
                            <p className="text-[18px]">It simplifies invoice generation, automates calculations, and ensures a professional output without complex tools.</p>
                        </div>
                        </div>

                    <div className="flex-1 border border-gray-500/30 rounded-xl p-[15px] bg-white shadow-inner shadow-black/5" >
                        <h1 className="font-bold text-3xl text-center" id="features">Features</h1>
                        <div>
                        <h2 className="font-semibold text-[22px] pt-[25px]">Invoice Creation</h2>
                            <p className="text-[18px]">Easily enter client details, invoice numbers, dates, and multiple billing items in a structured format.</p>
                        </div>
                        
                        <div>
                            <h2 className="font-semibold text-[22px] pt-[25px]">Real-time Calculation</h2>
                            <p className="text-[18px]">Automatically calculates subtotal, tax, and grand total as you add or update items.</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[22px] pt-[25px]">PDF Export & Print Support</h2>
                            <p className="text-[18px]">Download invoices as clean, printable PDF files and Generate printer-friendly invoices with proper formatting and layout.</p>
                        </div>
                        </div>
                </div>

                <div className="flex justify-center mx-[50px] mt-[60px] gap-[30px]">
                    <div className="flex-1 border border-gray-500/30 rounded-xl p-[15px] bg-white shadow-inner shadow-black/5">
                        <h1 className="font-bold text-3xl text-center" id="how">How It Works Section??</h1>
                        <div>
                        <h2 className="font-semibold text-[22px] pt-[25px]">Step 1: Enter Client Details</h2>
                            <p className="text-[18px]">Fill in customer information including name, address, invoice number, and date.</p>
                        </div>
                        
                        <div>
                            <h2 className="font-semibold text-[22px] pt-[25px]">Step 2: Add Line Items</h2>
                            <p className="text-[18px]">Add product or service details with quantity and rate and Check calculations and edit or delete items if needed.</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[22px] pt-[25px]">Step 3: Export / Print PDF</h2>
                            <p className="text-[18px]">Download or print your completed invoice instantly with your Company name, Address and Phone Number.</p>
                        </div>
                        </div>

                    <div className="flex-1 border border-gray-500/30 rounded-xl p-[15px] bg-white shadow-inner shadow-black/5" >
                        <h1 className="font-bold text-3xl text-center" id="benefits">Benefits</h1>
                        <div>
                        <h2 className="font-semibold text-[22px] pt-[25px]">Saves Time</h2>
                            <p className="text-[18px]">Generate professional invoices in minutes without manual calculations.</p>
                        </div>
                        
                        <div>
                            <h2 className="font-semibold text-[22px] pt-[25px]">Easy to Use</h2>
                            <p className="text-[18px]">Simple interface designed for smooth user experience. Clean and structured invoice format suitable for business use.</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[22px] pt-[25px]">Accurate Calculations</h2>
                            <p className="text-[18px]">Automatic total and tax computation reduces human errors.</p>
                        </div>
                        </div>
                </div>
            </div>
            <div>
               <footer className="bg-[oklch(83.7%_0.128_66.29)] text-black-900 mt-[80px]">
  <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
    <div>
      <h2 className="text-xl font-bold text-black">Invoice Builder</h2>
      <p className="mt-3 text-sm text-black">
        A simple and professional invoice generation tool for freelancers, 
        startups, and small businesses.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-bold text-black">Quick Links</h3>
      <ul className="mt-3 space-y-2 text-sm">
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#benefits">Benefits</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-black">Contact</h3>
      <p className="mt-3 text-sm text-black">
        Email: support@invoicebuilder.com
      </p>
      <p className="text-sm text-black">
        Built for productivity & efficiency.
      </p>
    </div>

  </div>
  <div className="border-t border-gray-700 text-center py-4 text-sm text-black">
    © 2026 Invoice Builder. All rights reserved.
  </div>
</footer>
            </div>
    </>
            )
}

export default Home