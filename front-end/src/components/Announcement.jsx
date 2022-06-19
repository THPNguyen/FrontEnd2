import styled from "styled-components";


const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  font-weight: 500;
`;
export default Announcement;
