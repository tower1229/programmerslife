

export const state = () => {
    return {
        show: false,
        color: 'info',
        text: '提示'
    };
};

export const mutations = {
    setToast(state, text, color) {
        state.show = true;
        state.text = text;
        state.color = color;
    }
};
