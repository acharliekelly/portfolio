// Layout style
import styled from "styled-components";
import { Content } from 'carbon-components-react/lib/components/UIShell';

export const StyledContent = styled(Content)`
    min-height: 100vh;

    @media (max-width: 640px) {
        margin-left: 0 !important;
    }
`;

export const BaseLayout = styled.div`
    border-width: 0;
`;