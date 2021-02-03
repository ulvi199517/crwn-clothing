import styled from 'styled-components';
import contact from '../../assets/contact.jpg'

export const ContactPageContainer = styled.div`
    margin: 20px 0px;
`;
export const ImageContainer = styled.div`
    height: 400px;
    background-image:  linear-gradient(to right, rgba(112, 95, 145, 0.52), rgba(128, 212, 255, 0.73)), url(${contact});
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 5%;
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.4rem;

    h1 {
    margin-bottom: 0; 
    }
    p {
        text-align: center;
        width: 80%;
    }
    @media (max-width: 1200px){
            height: 300px;
            font-size: 1.2rem;
        }
    @media (max-width: 800px){
        height: 200px;
        font-size: 1rem;
        padding-bottom: 50px;
    }
`;
export const ContentContainer = styled.div`
        width: 50%;
        height: 250px;
        position: relative;
        display: flex;  
        flex-direction: row;
        justify-content: center; 
        margin: 0 auto;
        margin-top: -60px;
        font-size: 1rem;

        @media (max-width: 1200px){
            width: 80%;
            height: 300px;
            
        }
        @media (max-width: 800px){
            width: 90%;
            display: grid;
            grid-template-columns: 80%;
            height: 350px;
        }
`;

export const CallContainer = styled.div`
        background-color: white;
        position: relative;
        display: grid;
        justify-items: center;
        justify-content: center;
        border: 2px solid rgba(192,192,192,0.2);
        box-shadow: 0 5px 5px rgba(192,192,192,0.2);
        width: 50%;
        margin-right: 3%;
        padding: 10px;
        border-radius: 10px;

        .phone-icon{
            font-size: 30px;
        }

        a {
            color: royalblue;
            font-size: 1.3rem;
            font-weight: bold;
        }
        p {
            text-align: center;
            
        }
        @media (max-width: 800px){
            width: 90%; 
            margin-bottom: 10px;
        }
`;
export const EmailContainer = styled.div`
        background-color: white;
        position: relative;
        display: grid;
        justify-items: center;
        justify-content: center;
        border: 2px solid rgba(192,192,192,0.2);
        box-shadow: 0 5px 5px rgba(192,192,192,0.2);
        width: 50%;
        margin-right: 3%;
        padding: 10px;
        border-radius: 10px;
            
            
        .email-icon{
            font-size: 30px;
        }
        p {
            text-align: center;
            
        }

        a {
            width: 60%;
            border-radius: 5%;
            height: 40px;
            color: white;
            font-size: 1.1rem;
            font-weight: bold;
            background-color: rgba(240, 73, 68, 0.8);
            display: flex;
            justify-content: center;
            padding-top: 5px;
            
            
        }
        a:hover {
            background-color: red;
        }
        @media (max-width: 800px){
            width: 90%; 
        }
`;         