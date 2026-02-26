import { use, useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Roboto from "../Fonts/Roboto-Regular.ttf";


const Create = () => {

    

    const [items, setItems] = useState(() => {
        try {
            const saveditems = localStorage.getItem("invoiceitems");
            return saveditems ? JSON.parse(saveditems) : [{ description: "", qty: 0, price: 0, amount: 0}];
        } catch (error) {
            console.error("Failed to parse localStorage:", error);
            return [{ description: "", qty: 0, price: 0, amount: 0 }];
        }
    });

    useEffect(() => {
        localStorage.setItem("invoiceitems", JSON.stringify(items));
    }, [items]);


    
    const handlechange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        if (field === "qty" || field === "price") {
            const qty = parseFloat(newItems[index].qty) || 0;
            const price = parseFloat(newItems[index].price) || 0;
            newItems[index].amount = qty * price;
        }
        setItems(newItems);

    }
    
    const [tax, settax] = useState(() => {
        const savedTax = localStorage.getItem("invoicetax");
        return savedTax ? JSON.parse(savedTax) : 0;
    });
    
    useEffect(() => {
        localStorage.setItem("invoicetax", JSON.stringify(tax));
    }, [tax]);

    const [taxAmount, setTaxAmount] = useState(0);

    const [subtotal, setSub] = useState(0);
    useEffect(() => {
        const invoiceitem = JSON.parse(localStorage.getItem("invoiceitems"));
        let sum = 0;
        for (let i = 0; i < invoiceitem.length; i++) {
            sum += parseFloat(invoiceitem[i].amount) || 0;
        }
        setSub(sum);
        setTaxAmount(sum * tax / 100);
    }, [items, tax])


    const handleAddItem = () => {
        setItems([
            ...items,
            { description: "", qty: 0, price: 0, amount: 0 }
        ]);
    };

    const handleDelete = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };


    const totalDue = subtotal + taxAmount;

    const [companyName, setcompanyName] = useState(() => {
        return localStorage.getItem("companyName") || "";
    })
    const [tagline, setTagline] = useState(() => {
    return localStorage.getItem("tagline") || "";
});
    const [companyAddress, setcompanyAddress] = useState(() => {
        return localStorage.getItem("companyAddress") || "";
    });
    const [companyPhone, setCompanyphone] = useState(() => {
    return localStorage.getItem("companyPhone") || "";
});
    const [companyEmail, setCompanyEmai] = useState(() => {
    return localStorage.getItem("companyEmail") || "";
});


    useEffect(() => {
    localStorage.setItem("companyName", companyName);
}, [companyName]);

useEffect(() => {
    localStorage.setItem("tagline", tagline);
}, [tagline]);

useEffect(() => {
    localStorage.setItem("companyAddress", companyAddress);
}, [companyAddress]);

useEffect(() => {
    localStorage.setItem("companyPhone", companyPhone);
}, [companyPhone]);

useEffect(() => {
    localStorage.setItem("companyEmail", companyEmail);
}, [companyEmail]);
    

    const [clientName, setclientName] = useState(() => {
        return localStorage.getItem("clientName") || "";
    });
    const [clientAddress, setclientAddress] = useState(() => {
        return localStorage.getItem("clientAddress") || "";
    });
    const [clientEmail, setClientEmail] = useState(() => {
        return localStorage.getItem("clientEmail") || "";
    })

    useEffect(() => { localStorage.setItem("clientName", clientName); }, [clientName]);
useEffect(() => { localStorage.setItem("clientAddress", clientAddress); }, [clientAddress]);
useEffect(() => { localStorage.setItem("clientEmail", clientEmail); }, [clientEmail]);

    const [notice, setNotice] = useState(() => {
        return localStorage.getItem("notice") || "Thank you for your business!!";
    })


       const [invoice, setinvoice] = useState(() => {
        return localStorage.getItem("invoice") || "INV - " + Date.now().toString().slice(-4); }) 

  

useEffect(() => {
    localStorage.setItem("invoiceNumber", invoice);
}, [invoice]);

    const [date, setDate] = useState(() => {
        return localStorage.getItem("date") || "";
    });
    const [dueDate, setDueDate] = useState(() => {
        return localStorage.getItem("dueDate") || "";
    });

    const formatDate = (d) => {
  if (!d) return "";
  const [year, month, day] = d.split("-");
  return `${day}/${month}/${year}`;
};

    useEffect(() => { localStorage.setItem("date", date); }, [date]);
useEffect(() => { localStorage.setItem("dueDate", dueDate); }, [dueDate]);
useEffect(() => { localStorage.setItem("notice", notice); }, [notice]);

 const handleDownload = () => {
     const doc = new jsPDF();
     
  doc.setFontSize(18);
  doc.text(`${companyName}`, 20, 20);

  doc.setFontSize(11);
  doc.text(`${tagline}`, 20, 28);
  doc.text(`${companyAddress}`, 20, 34);
  doc.text(`Phone: ${companyPhone}`, 20, 40);
  doc.text(`Email: ${companyEmail}`, 20, 46);

  doc.setFontSize(20);
  doc.text("INVOICE", 150, 20);

  doc.setFontSize(11);
     doc.text(`Date: ${formatDate(date)}`, 150, 30);
     doc.text(`Due Date: ${formatDate(dueDate)}`, 150, 38);
  doc.text(`Invoice No: ${invoice}`, 150, 46);

  doc.setFontSize(13);
  doc.text("Bill To:", 20, 60);

  doc.setFontSize(11);
     doc.text(`Name: ${clientName}`, 20, 68);
     
  const splitAddress = doc.splitTextToSize(clientAddress, 150); 
     doc.text("Address:", 20, 74);
     
doc.text(splitAddress, 20, 78);


doc.text(`Email: ${clientEmail}`, 20, 86);
  doc.text(`Email: ${clientEmail}`, 20, 86);

  autoTable(doc, {
    startY: 100,
    head: [["Description", "Qty", "Price", "Amount"]],
    body: items.map((item) => [
      item.description,
      item.qty,
      item.price,`Rs.${item.amount}`,
    ]),
  });

  const finalY = doc.lastAutoTable.finalY + 10;

  doc.setFontSize(15);
  doc.text(`Subtotal: Rs. ${subtotal.toFixed(2)}`, 130, finalY);
  doc.text(`Tax (${tax}%): Rs. ${taxAmount.toFixed(2)}`, 130, finalY + 8);

  doc.setFontSize(14);
  doc.text(`Total: Rs. ${(subtotal + taxAmount).toFixed(2)}`, 130, finalY + 16);

  doc.setFontSize(10);
  doc.text(`${notice}`, 20, finalY + 35);

  doc.save(`${invoice}.pdf`);
};

    
    const handleReset = () => {
        localStorage.removeItem("companyName")
        localStorage.removeItem("tagline")
        localStorage.removeItem("companyAddress")
        localStorage.removeItem("companyPhone")
        localStorage.removeItem("companyEmail")
        localStorage.removeItem("clientName")
        localStorage.removeItem("clientAddress")
        localStorage.removeItem("clientEmail")
        localStorage.removeItem("notice")
        localStorage.removeItem("invoiceNumber")
        localStorage.removeItem("date")
        localStorage.removeItem("dueDate")
        localStorage.removeItem("invoiceitems")
        localStorage.removeItem("invoicetax");
}

    return (
        <>
            <div id="invoice">
            <div>
                <h1 className="md:text-3xl text-xl font-bold text-center m-[25px]" id="invoice">INVOICE</h1>
                </div>
                <form>
                <div className="flex justify-center mb-5">
                    <button className="border border-gray-900/50 mt-5 px-[10px] py-[2px] rounded-lg text-white font-bold bg-black" onClick={handleReset}>Reset Invoice</button>
                    </div>
                    </form>
            <div className="flex flex-col justify-center gap-[15px] border border-gray-500/30 rounded-xl max-w-4xl mx-auto items-center px-0 py-0 pb-10 mx-auto bg-white">
                <div className="border-b border-gray-500/30 pb-[5px] w-full bg-[oklch(97.4%_0.038_75.164)] md:h-[70px] h-[50px] items-center pl-[15px] pt-[15px] rounded-xl">
                    <h1 className="text-xl text-center md:text-left md:text-2xl font-semibold">Your Organization Details</h1>
                    </div>
                <div className="flex flex-row gap-[10px] md:gap-[30px]">
                  <div className="w-[150px] md:w-[300px]">
                <label className="block mb-1 text-[15px] font-medium text-center md:text-left"> COMPANY NAME
        </label>
    <input
      type="text"
      placeholder="Enter Company Name..."
                                className="w-full text-center text-[13px] md:text-[15px] border border-gray-500/30 rounded-lg py-1 md:py-2 bg-[oklch(99.4%_0.038_75.164)]"
                                value={companyName}
                                onChange={e => setcompanyName(e.target.value)}
    />
                </div>
                      <div className="w-[150px] md:w-[300px]">
                <label className="block mb-1 text-[15px] font-medium text-center md:text-left">TAGLINE
        </label>
    <input
      type="text"
      placeholder="Enter Tagline..."
      className="w-full text-center text-[12px] md:text-[15px] border border-gray-500/30 rounded-lg py-1 md:py-2 bg-[oklch(99.4%_0.038_75.164)]" value={tagline} onChange={e => setTagline(e.target.value)}
    />
                    </div>
                </div>
                <div className="md:w-[530px] w-[300px]">
                 <label className="block mb-1 text-[15px] font-medium text-center md:text-left">ADDRESS
        </label>
                    <textarea placeholder="Enter Company Address.." className="w-full text-center border text-[13px] md:text-[15px] border-gray-500/30 rounded-lg bg-[oklch(99.4%_0.038_75.164)]" cols={5} rows={4} value={companyAddress} onChange={e => setcompanyAddress(e.target.value)} />
                    </div>
                <div className="flex flex-row gap-[15px] md:gap-[30px]">
                    <div className="w-[150px] md:w-[300px]">
                 <label className="block mb-1 text-[15px] font-medium text-center md:text-left">PHONE
        </label>
                            <input type="tel" placeholder="Enter Phone Number.." className="w-full text-center text-[12px] md:text-[15px] border border-gray-500/30 rounded-lg py-1 md:py-2 bg-[oklch(99.4%_0.038_75.164)]"
                                value={companyPhone}
                                onChange={e => setCompanyphone(e.target.value)} />
                    </div>
                    <div className="w-[150px] md:w-[300px]">
                 <label className="block mb-1 text-[15px] font-medium text-center md:text-left">E-MAIL
        </label>
                        <input type="text" placeholder="Enter Email Address.." className="w-full text-center text-[12px] md:text-[15px] border border-gray-500/30 rounded-lg py-1 md:py-2 bg-[oklch(99.4%_0.038_75.164)]" value={companyEmail} onChange={e => setCompanyEmai(e.target.value)}/>
                        </div>
                </div>
            </div>

           <div className="flex flex-col justify-center gap-[15px] border border-gray-500/30 rounded-xl max-w-4xl mx-auto items-center px-0 py-0 pb-10 mx-auto bg-white mt-[35px]">
                <div className="border-b border-gray-500/30 pb-[5px] w-full bg-[oklch(97.4%_0.038_75.164)] md:h-[70px] h-[50px] items-center pl-[15px] pt-[15px] rounded-xl">
                    <h1 className="text-xl text-center md:text-left md:text-2xl font-semibold">Invoice Details</h1>
                </div>
                <div><h1 className="font-semibold py-3">Invoice INFO</h1></div>
                <div className="flex flex-row md:gap-[25px] gap-[5px]">
                <div className="md:w-[200px] w-[100px]">
                <label className="block mb-1 text-[15px] font-medium text-center md:text-left"> INVOICE#
            </label>
        <input
        type="text"
        placeholder="Invoice Number.."
        className="w-full text-center text-[12px] md:text-[15px] border border-gray-500/30 rounded-lg py-1 md:py-2 bg-[oklch(99.4%_0.038_75.164)]" value={invoice}
  onChange={(e) => setinvoice(e.target.value)}
        />
                    </div>
                    <div className="md:w-[200px] w-[100px]">
                <label className="block mb-1 text-[15px] font-medium text-center md:text-left"> ISSUE DATE
        </label>
    <input
      type="date"
      className="w-full text-center text-[12px] md:text-[15px] border border-gray-500/30 rounded-lg py-1 md:px-3 px-1 md:py-2 bg-[oklch(99.4%_0.038_75.164)]" value={date} onChange={e => setDate(e.target.value)}
    />
                    </div>
                    <div className="md:w-[200px] w-[100px]">
                <label className="block mb-1 text-[15px] font-medium text-center md:text-left"> DUE DATE
        </label>
    <input
      type="date"
      className="w-full text-center text-[12px] md:text-[15px] border border-gray-500/30 rounded-lg py-1 md:px-3 px-1 md:py-2 bg-[oklch(99.4%_0.038_75.164)]" value={dueDate} onChange={e => setDueDate(e.target.value)}
    />
                    </div>
                </div>
                <div>

                </div>
                <div><h1 className="font-semibold md:py-3" id="client">Invoice INFO</h1></div>
                 <div className="md:w-[600px] w-[300px]">
                <label className="block mb-1 text-[15px] font-medium text-center md:text-left"> CLIENT NAME
        </label>
    <input
      type="text"
      placeholder="Client/Company Name.."
      className="w-full text-center text-[13px] md:text-[15px] border border-gray-500/30 rounded-lg py-1 md:py-2 bg-[oklch(99.4%_0.038_75.164)]" value={clientName} onChange={e => setclientName(e.target.value)}
    />
                    </div>
            <div className="md:w-[600px] w-[300px]">
                 <label className="block mb-1 text-[15px] font-medium text-center md:text-left" > CLIENT ADDRESS
        </label>
                    <textarea placeholder="Client Company Address.." className="w-full text-center border text-[13px] md:text-[15px] border-gray-500/30 rounded-lg bg-[oklch(99.4%_0.038_75.164)]" cols={5} rows={4} value={clientAddress} onChange={e => setclientAddress(e.target.value)}/>
                    </div>
                <div className="md:w-[600px] w-[300px]">
                <label className="block mb-1 text-[15px] font-medium text-center md:text-left"> CLIENT EMAIL
        </label>
    <input
      type="text"
      placeholder="Client Email..."
      className="w-full text-center text-[12px] md:text-[15px] border border-gray-500/30 rounded-lg py-1 md:py-2 bg-[oklch(99.4%_0.038_75.164)]" value={clientEmail} onChange={e => setClientEmail(e.target.value)}
    />
                </div>              
            </div>

                       <div className="flex flex-col justify-center gap-[15px] border border-gray-500/30 rounded-xl max-w-4xl mx-auto items-center px-0 py-0 pb-10 mx-auto bg-white mt-[35px]">
                <div className="border-b border-gray-500/30 pb-[5px] w-full bg-[oklch(97.4%_0.038_75.164)] md:h-[70px] h-[50px] items-center pl-[15px] pt-[15px] rounded-xl">
                    <h1 className="text-xl text-center md:text-left md:text-2xl font-semibold" id="invoiceprep">List Items</h1>
                </div>
                <div>
                    <table>
                    <thead className="">
                         <tr>
      <th className="text-left md:pr-35 text-[14px]">DESCRIPTION</th>
      <th className="text-center md:pr-25 text-[14px]">QTY</th>
      <th className="text-center md:pr-25 text-[14px]">UNIT RATE</th>
      <th className="text-right md:pr-20 text-[14px]">AMOUNT</th>
    </tr>
                        </thead>
                        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
                  <td ><input type="text" placeholder="Product name/ Description" className="mt-4 border border-gray-500/30 rounded-sm p-1 md:w-[200px] w-[90px]"
                      value={item.description}
                      onChange={e => handlechange(index, "description", e.target.value)}></input></td>
                                <td>
                                    <input type="number" placeholder="Quantity" className="mt-4 border border-gray-500/30 rounded-sm p-1 md:w-[70px] w-[35px] mr-1" value={item.qty}
                      onChange={e => handlechange(index, "qty", e.target.value)}></input>
                                </td>
                                <td>
                                    <input type="number" placeholder="Unit Price" className="mt-4 border border-gray-500/30 rounded-sm p-1 md:w-[100px] w-[60px]" value={item.price}
                      onChange={e => handlechange(index, "price", e.target.value)}></input>
                                </td>
                                <td>
                      <input type="number" placeholder="Amount" className="mt-4 border border-gray-500/30 rounded-sm p-1 md:w-[120px] w-[70px]"
                      value={item.amount} readOnly></input>
                  </td>
                  <td>
  <MdDeleteForever
    className="text-red-500 text-2xl cursor-pointer hover:text-red-700 mt-3"
    onClick={() => handleDelete(index)}
  />
</td>
                            </tr>
              ))}
                        </tbody>
                    </table>
                             <button className="border border-gray-900/50 mt-5 px-[10px] py-[2px] rounded-lg" onClick={handleAddItem}>
                                + Add Line Item
                    </button>
                    <div className="border-t border-gray-500/30 mt-6">
                        <div className="mt-3">
                        <label>Tax Rate %</label>
                            <input type="number" placeholder="Tax Rate.."
                                value={tax}
                                onChange={e => settax(e.target.value)}
                                className="mt-4 ml-3 border border-gray-500/30 rounded-sm p-1 w-[90px]" />
                        </div>
                        <div className="border-b border-gray-500/30 pb-[5px] md:w-[700px] w-full bg-[oklch(97.4%_0.038_75.164)] h-[180px] items-center pl-[15px] pt-[15px] rounded-xl mt-4">
                            <div className="flex flex-row justify-between mb-5 font-semibold">
                                <h1>Subtotal</h1>
                                <p className="md:pr-15 pr-3">&#8377; {subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex flex-row justify-between mb-5 font-semibold border-b border-gray-500/50 pb-4">
                                <h1>Tax Amount</h1>
                                <p className="md:pr-15 pr-3">&#8377; {taxAmount.toFixed(2) }</p>
                            </div>
                            <div className="flex flex-row justify-between mb-5 font-bold md:text-[22px] text-[18px] mb-5">
                                <h1>Total Due</h1>
                                <p className="md:pr-15 pr-3">&#8377; {totalDue.toFixed(2)}</p>
                            </div>

                </div>
                        </div>
                        <div className="flex justify-center">
                            <button
  onClick={handleDownload   }
  className="bg-black text-white px-4 py-2 rounded mt-4" id="export"
>
  Download PDF
</button>
                        </div>
                </div>
            </div>
            
            <div className="flex flex-col justify-center gap-[15px] border border-gray-500/30 rounded-xl max-w-4xl mx-auto items-center px-0 py-0 pb-10 mx-auto bg-white mt-[35px]">
                <div className="border-b border-gray-500/30 pb-[5px] w-full bg-[oklch(97.4%_0.038_75.164)] md:h-[70px] h-[50px] items-center pl-[15px] pt-[15px] rounded-xl">
                    <h1 className="text-xl text-center md:text-left md:text-2xl font-semibold">Notice & Terms</h1>
                </div>
                <div>
                    <h1 className="mb-3">Notes (Shown on Invoice)</h1>
                        <textarea className="w-full text-center border text-[13px] md:text-[15px] border-gray-500/30 rounded-lg bg-[oklch(99.4%_0.038_75.164)]" placeholder="Enter the notes which will be shown on the bottom of the PDF.."
                    value={notice}        onChange={e => setNotice(e.target.value)} cols={40} rows={4} />
                </div>
                </div>
</div>

      <div>
               <footer className="bg-[oklch(83.7%_0.128_66.29)] text-black-900 mt-[80px]">
  <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
    <div>
      <h2 className="text-xl md:text-[20px] font-bold text-black">Invoice Builder</h2>
      <p className="mt-3 text-sm md:text-[16px] text-black">
        A simple and professional invoice generation tool for freelancers, 
        startups, and small businesses.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-bold md:text-[20px] text-black">Quick Links</h3>
      <ul className="mt-3 space-y-2 text-sm md:text-[16px]">
        <li><a href="#invoice">Invoice</a></li>
        <li><a href="#client">Client Details</a></li>
        <li><a href="#invoiceprep">Invoice Preparation</a></li>
        <li><a href="#export">Export</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold md:text-[20px] text-black">Contact</h3>
      <p className="mt-3 text-sm md:text-[16px] text-black">
        Email: support@invoicebuilder.com
      </p>
      <p className="text-sm md:text-[16px] text-black">
        Built for productivity & efficiency.
      </p>
    </div>

  </div>
  <div className="border-t border-gray-700 md:text-[15px] text-center py-4 text-sm text-black">
    © 2026 Invoice Builder. All rights reserved.
  </div>
</footer>
            </div>
            
        </>
    )
}

export default Create