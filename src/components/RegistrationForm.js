import React from 'react';
import RegistrationModal from "./RegistrationModal";
import { useNavigate, useParams, Link } from "react-router-dom";
const RegistrationForm = (props) => {
    const navigate = useNavigate();
    return (
        <RegistrationModal
                // title="Delete stream"
                // content={renderContent()}
                // actions={actions}
                onDismiss={() => navigate('/')}
            />
    )
}

export default RegistrationForm
