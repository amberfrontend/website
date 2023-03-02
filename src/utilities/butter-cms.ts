import Butter, { ButterStatic } from "buttercms";

export let butterCMS: ButterStatic;

try {
    const butterCMSPreview = !(
        process.env.REACT_APP_BUTTER_API_TOKEN === "false" ||
        process.env.REACT_APP_BUTTER_API_TOKEN === "0"
    );

    butterCMS = Butter(
        process.env.REACT_APP_BUTTER_API_TOKEN as string,
        butterCMSPreview
    );
} catch (error) {
    console.log(error);
}
