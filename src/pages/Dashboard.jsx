import styled from "styled-components"
import SideBar from "../components/Sidebar"
import NavBar from "../components/NavBar"
import Input from "../components/Input"
import Button from "../components/Button"


const Container = styled.div`
    
    display: flex;
    height: 100vh;
`

const ContainerSection = styled.div`
    padding: 30px;
    flex: 1;
`

const FlexDivWhite = styled.div`
    display: flex;
    justify-content: space-between;
    `

const WhiteBox = styled.div`
    padding: 15px;
    background: #fff;
    flex: 1;
    margin: 7px;
`

const Table = styled.table`
    width: 100%;

    thead{
        font-weight: bold;
    }
    tr{
        background: #ececec;
        padding: 5px 10px;
    }
`


const Dashboard = ()=>{
    return (
        <Container>
            <SideBar />

            <ContainerSection>
                <NavBar title="Dashboard" walletBalance="NGN 100,000" pendingPayment="NGN 30,000"/>

                <FlexDivWhite>
                    <WhiteBox>
                        <Table>
                            <thead>
                                <td>Amount</td>
                                <td>Scheduled Date</td>
                                <td>Status</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NGN 20,000</td>
                                    <td>June 14, 2024</td>
                                    <td>scheduled</td>
                                </tr>
                            </tbody>
                        </Table>
                    </WhiteBox>

                    <WhiteBox>
                        <h2>Schedule a payment</h2>
                        <form>
                            <Input type="number" name="amount" topLabel="Amount *"/>
                            <Input type="date" name="date" topLabel="Schedule date *"/>
                            <Input type="text" name="description" topLabel="Description"/>
                            <Button title="Submit" name="submit" />
                        </form>
                    </WhiteBox>

                </FlexDivWhite>

            </ContainerSection>
        </Container>
    )
}

export default Dashboard