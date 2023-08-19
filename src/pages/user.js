import { useRouter } from "next/router";
import User from "../components/User";

const UserPage = () => {
    const router = useRouter();
    const { username } = router.query;

    return (
        <div>
            <User username={username} />
        </div>
    );
};

export default UserPage;
