
const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content">
            <div className="footer sm:footer-horizontal p-10  max-w-screen-xl container mx-auto">
                <nav>
                    <h6 className="footer-title">Servicves</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            {/* footer bottom */}
            <div className=" bg-neutral text-neutral-content">
                <div className="footer sm:footer-horizontal  p-6  max-w-screen-xl container mx-auto">
                    <aside>
                        <p>
                            Simple Agency App @ 2026. All rights reserved.
                        </p>
                    </aside>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a>Eleven</a>
                            <a>Twelve</a>
                            <a>Thirteen</a>
                        </div>
                    </nav>
                </div>
            </div>

        </footer>
    )
}

export default Footer