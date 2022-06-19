import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Infor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
const CategoryItem = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Image src={item.img} />
      <Infor>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Infor>
    </Container>
  );
};

export default CategoryItem;