import styled from "styled-components";


const NavDiv = styled.div`
    background: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 30px;
`

const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #b4b4b4;
    
`

const UserSection = styled.div`
    display: flex;
`

const Wallet = styled.div`
    border: solid 1px #b4b4b4;
    border-radius: 5px;
    padding: 5px 10PX;
    margin-right: 5px;
    position: relative;

    .wallet-info{
        position: absolute;
        top: -15px;
        background: #fff;
        padding: 1px;
        color: #00716c;
        left: 0;
        right: 0;
        transform: translateX(-50%, -50%);

        small{
            font-size: .5;
        }
    }
`


const NavBar = ({title, walletBalance, pendingPayment}) =>{
    return (
        <NavDiv>
            <div>{title}</div>
            <UserSection>
                <Wallet>
                    <div className="wallet-info">
                        <small>pending payment</small>
                    </div>
                            {pendingPayment}
                    </Wallet>
            </UserSection>
            <UserSection>
                <Wallet>
                    <div className="wallet-info">
                        <small>wallet balance</small></div>
                    {walletBalance}</Wallet>
                <Avatar />
            </UserSection>
        </NavDiv>
    )
}

export default NavBar