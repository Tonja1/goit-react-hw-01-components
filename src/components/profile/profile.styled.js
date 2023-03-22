import styled from "styled-components";

export const Avatar = styled.img`
  display: block;
  width: 100px;
  margin: auto;
  border-radius: 50%;
  background-color: white;
`;

export const About = styled.p`
  text-align: center;
  margin: 0px;
`;

export const Layout = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 400px;
  background-color: lightgray;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  background-color: gray;
  justify-content: space-around;
  padding: 0px;
  padding-top: 10px;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  width: 100%;
  text-align: center;
`;