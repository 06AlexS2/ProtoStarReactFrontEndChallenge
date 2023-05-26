export default function PageContent() {
  return (
    <div className=" z-0 rounded-lg shadow-sm p-8 bg-slate-50">
      <div className="rounded-lg shadow-inner p-2 mx-1 z-10 bg-white">
        <h1 className="text-center text-black font-bold text-lg">
          Front-End Challenge
        </h1>
        <h2 className=" text-center text-black font-semibold text-sm z-20">
          Original Marketing ProtoStar React Dev
        </h2>
        <p className=" font-serif text-gray-700 text-clip text-center">
          This Challenge was made with Next.js 13.4 and TailwindCSS. Here, the
          instructions of the test:
        </p>
      </div>
      <div className=" z-50 p-4">
        <ol className=" text-start font-medium order-1" type="a">
          <li>Install the Moveable library using npm install react-moveable</li>
          <li>
            Import the Moveable library into your component using import
            Moveable from 'react-moveable'
          </li>
          <li>
            Import the image from fetch
            “https://via.placeholder.com/200x200.png?text=Move+me!”
          </li>
          <li>
            Use the "useState" hook to create state variables for the image
            position, size, and rotation
          </li>
          <li>
            Create an "onDrag" event handler that updates the image position
            state based on the user's mouse or touch input
          </li>
          <li>
            Create an "onResize" event handler that updates the image size state
            based on the user's mouse or touch input
          </li>
          <li>
            Render the Moveable component with the image as its child, passing
            in the state variables and event handlers as props
          </li>
        </ol>
      </div>
      <div className="py-2 text-justify">
        <p>
          Now, as you can see in the code (uploaded on a Github Repo), I made a
          child component and passed the state variables and event handlers as
          props.
        </p>
      </div>
      <div className="text-center font-bold"><p>Thank you for the opportunity. I hope I hear from you soon.</p></div>
    </div>
  );
}
