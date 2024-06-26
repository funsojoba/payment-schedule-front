import styled from "styled-components"
import SideBar from "../components/Sidebar"
import NavBar from "../components/NavBar"
import Input from "../components/Input"
import Button from "../components/Button"

import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWallet } from "../store/feature/payment/wallet"
import { getSchedule } from "../store/feature/payment/getSchedule"
import { postSchedule } from "../store/feature/payment/postSchedule"

import { ClipLoader } from "react-spinners"

import NairaFormat from "../utils/formatMoney"


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
    const dispatch = useDispatch()
    const walletState = useSelector((store)=> store.getWallet);
    const scheduleState = useSelector((store) => store.getSchedule);
    const postScheduleState = useSelector((store) => store.postSchedule)

    const [amount, setAmount] = useState("")
    const [scheduleDate, setScheduleDate] = useState("")
    const [description, setDescription] = useState("")

    const handleGetWallet = ()=>{
        dispatch(getWallet())
    }

    const handleGetSchedule = ()=>{
        dispatch(getSchedule())
    }

    const handlePostSchedule = (e)=>{
        e.preventDefault();
        dispatch(postSchedule({
            amount:amount,
            schedule_date:scheduleDate,
            description: description,
            currency: "NGN" // hard coding this to reduce complexity
        }))
    }

    useEffect(()=>{
        handleGetWallet()
        handleGetSchedule()
    }, [])

    
    
    let walletBalance = walletState.data
    let schedules = scheduleState.data

    return (
        <Container>
            <ToastContainer/>
            <SideBar />

            <ContainerSection>
                <NavBar 
                    title="Dashboard" 
                    walletBalance={NairaFormat.format(walletBalance?.data.total_amount)}
                    pendingPayment={NairaFormat.format(schedules?.total_scheduled_payment)}/>

                <FlexDivWhite>
                    <WhiteBox>
                        <Table>
                            <thead>
                                <td>Amount</td>
                                <td>Scheduled Date</td>
                                <td>Status</td>
                            </thead>
                            <tbody>
                                {schedules?.data.map(data => {
                                    return <tr>
                                                <td>{NairaFormat.format(data.amount)}</td>
                                                <td>{data.schedule_date}</td>
                                                <td>{data.status}</td>
                                            </tr>
                                })}
                            </tbody>
                        </Table>
                    </WhiteBox>

                    <WhiteBox>
                        <h2>Schedule a payment</h2>
                        <form>
                            <Input 
                                type="number" 
                                name="amount" 
                                topLabel="Amount *"
                                value={amount}
                                required={true}
                                onChange={(e)=> setAmount(e.target.value)}
                                />
                            <Input 
                                type="date" 
                                name="date" 
                                required={true}
                                topLabel="Schedule date *"
                                value={scheduleDate}
                                onChange={(e)=> setScheduleDate(e.target.value)}
                                />
                            <Input 
                                type="text" 
                                name="description" 
                                topLabel="Description"
                                value={description}
                                onChange={(e)=> setDescription(e.target.value)}
                                />
                            <Button 
                                onClick={handlePostSchedule} 
                                title={postScheduleState.loading ? <ClipLoader
                                    size={10}
                                    color="#ffffff"
                                  />: "Submit"}
                                name="submit" />
                        </form>
                    </WhiteBox>

                </FlexDivWhite>

            </ContainerSection>
        </Container>
    )
}

export default Dashboard