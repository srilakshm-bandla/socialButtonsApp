const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;

  return <button className={`${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <div class="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like-button" buttonText="Like" />
        <Button className="comment-button" buttonText="Comment" />
        <Button className="share-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
