import { gql, useSubscription } from "@apollo/client";
import { Message, SubscriptionMessagePostedArgs } from "../generated/graphql";

const MESSAGEPOSTED = gql`
    subscription($user: String!) {
        messagePosted(user: $user) {
            id
            user
            text
            createdAt
        }
    }
`

type Props = {
    variables: SubscriptionMessagePostedArgs
}

export const LastMessage = (props: Props) => {
    const {data, loading} = useSubscription<Message>(
        MESSAGEPOSTED,
        {variables: props.variables}
    )

    return (
        <h2>Last Message : {!loading && data?.text}</h2>
    )
}