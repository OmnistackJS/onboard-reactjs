import styled from 'styled-components';

export const Container = styled.form`
    position: relative;
    margin: 5rem auto;
    padding: 25px 40px;
    width: 320px;
    /* height: 405px; */
    height: max-content;
    background: #FFFFFF;
    box-shadow: 0 0 30px rgba(0,0,0,.1);
    border-radius: 4px;

    h1 {
        color: #5E6C84;
        font-size: 1.25rem;
        text-transform: capitalize;
        text-align: center;
        margin-bottom: 2rem;
        font-family: 'Reboto', sans-serif;
    }


    .form-control {
        position: relative;
        margin: .7rem 0;

        input {
            width: 100%;
            height: 44px;
            background-color: #FAFBFC;
            box-sizing: border-box;
            border-radius: 3px;
            outline: none;   
            border: 2px solid #DFE1E6;
            padding: .2rem .5rem; 
            transition: .25s all;

            &::placeholder {
                /* color: #FAFBFC; */
            }
        }
    }

    span {
        position: relative;
        display: block;
        margin-top: 1.2rem;
        text-align: center;
        color: #F9FAFC;

        &:after {
            content: '';
            display: block;
            width:100%;
            /* margin-top: 1rem; */
            border: 1px solid #f2f2f2;
        }
    }

    .forgot {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 85%;
        margin: 0 auto;
        padding-bottom: 2rem;

        .anchor {
            text-decoration: none;
            font-family: 'Reboto', sans-serif;
            color: #0052CC;
            font-size: 14px;
            margin-top: 1rem;
            text-transform: capitalize;
        }
    }
    
`;

