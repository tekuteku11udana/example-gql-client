import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Message, MutationPostMessageArgs } from "../generated/graphql";

const POST_MESSAGE = gql`
    mutation($user: String!, $text: String!) {
        postMessage(user: $user, text: $text) {
            id
            user
            text
            createdAt
        }
    }
`

export const NewMessage = () => {
    const [mutateFunction, {data, loading, error}] = useMutation<Message>(POST_MESSAGE)
    const [user, setUser] = useState<string>("")
    const [text, setText] = useState<string>("")

    return (
        <div>
            <div>User</div>
            <input value={user} onChange={(e) => setUser(e.currentTarget.value)} />
            <div>text</div>
            <input value={text} onChange={(e) => setText(e.currentTarget.value)} />
            <button onClick={() => mutateFunction({variables: {user: user, text: text}})}>Submit</button>
        </div>    
    )
}

