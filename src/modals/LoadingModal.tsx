type LoadingModalProps = {
    isLoading: boolean;
};

export default function LoadingModal(props: LoadingModalProps) {
    const { isLoading } = props;
    return (
        <div className={`${isLoading ? 'block' : 'hidden'} absolute top-0 left-0 w-screen h-screen bg-[#342b2b53] z-10 flex items-center justify-center`}>
            <div className="mx-auto my-auto">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        </div>
    );
}