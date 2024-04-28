import FooterNav from "./FooterNav"

const Footer = () => {
  return (
    <div>
        <div className="footer text-center">
            <div className="footer-building-bg h-[600px] w-full mt-52 ">
                <FooterNav />
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center p-3 text-xs tracking-widest">
                Copyright © 2022 ZOLVRR Inc, All Rights Reserved, All trademarks, logos and names are properties of their respective owners
            </div>
        </div>       
    </div>

  )
}

export default Footer