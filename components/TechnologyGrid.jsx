import Image from "next/image";
import styled from "styled-components"

export default function TechnologyGrid() {
  return (
    <Container>
      <div className="tech">
        <Image
          src="/images/technology/babel.svg"
          width={144}
          height={100}
          alt="Babel"
        />
      </div>
      <div className="tech bootstrap">
        <Image
          src="/images/technology/bootstrap.svg"
          width={60}
          height={58}
          alt="Bootstrap"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/css3.svg"
          width={144}
          height={56}
          alt="CSS3"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/express.svg"
          width={300}
          height={220}
          alt="Express"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/figma.svg"
          width={144}
          height={56}
          alt="Figma"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/Firebase.svg"
          width={144}
          height={56}
          alt="Firebase"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/git.svg"
          width={144}
          height={56}
          alt="GIT"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/html5.svg"
          width={144}
          height={56}
          alt="HTML5"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/js.svg"
          width={144}
          height={56}
          alt="JS"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/linux.svg"
          width={144}
          height={56}
          alt="Linux"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/mongodb.svg"
          width={144}
          height={64}
          alt="MongoDB"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/mysql.svg"
          width={144}
          height={100}
          alt="Mysql"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/next.svg"
          width={144}
          height={56}
          alt="Next"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/nodejs.svg"
          width={200}
          height={150}
          alt="Node.js"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/photoshop.svg"
          width={144}
          height={56}
          alt="Photoshop"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/react.svg"
          width={144}
          height={56}
          className='image'
          alt="React"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/redux.svg"
          width={144}
          height={56}
          alt="Redux"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/sass.svg"
          width={144}
          height={56}
          alt="SASS"
        />
      </div>
      <div className="tech">
        <Image
          src="/images/technology/webpack.svg"
          width={144}
          height={100}
          alt="Webpack"
        />
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 55.25rem;
  height: 25.4375rem;
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
  .tech{
    display: grid;
    align-content: center;
    max-width: 144px;
    height: 82px;
    background: #9D0208;
    border-radius: 25px;
  }
  .bootstrap{
    width: 90px;
    height: 82px;
  }
    @media screen and (max-width: 800px){
      width: 100%;
      justify-content: center;
      margin-right: 15px;
      .tech{
        max-width: 99px;
        height: 47px;
      }
    }
`;