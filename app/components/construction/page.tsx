// import './construction.scss';
import construction from '../../media/construction.svg';

export default function Construction() {
    return (
    <div className="flex h-screen justify-center items-center">
        <div className="container d-flex align-items-center">
            <div className="w-sm-75 w-lg-50 text-center mx-sm-auto">
      <div className="mb-7">
        <img
          className="img-fluid"
                    src={construction.src}
                    alt="SVG Illustration"
                />
            </div>
            {/* <h1>Sorry, this page is under construction.</h1> */}
            <p>
                    We apologize for the inconvenience but this page is currently undergoing
                    planned maintenance. Stay tuned!
                </p>
            </div>
        </div>
    </div>

    )
}