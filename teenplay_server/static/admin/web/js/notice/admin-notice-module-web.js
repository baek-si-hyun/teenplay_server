// 공지사항 관리자 서비스 생성
const adminNoticeService = (() => {
    const write = async (notice) => {
        const response= await fetch("/admin/notice/", {
            mothod: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-CSRFToken': csrf_token
            },
            body: JSON.stringify(notice)
        });
    }

    // // 공지사항 목록 가져오기
    // const getList = async (page, callback) => {
    //     const response = await fetch(`/admin/notice/${page}/`);
    //     const notices = await response.json();
    //     console.log(notices)
    //     if (callback){
    //         return callback(notices);
    //     }
    //     return notices;
    // }

    // const getPagination = async (callback) => {
    //     const pagination = {};
    //     callback(pagination)
    // }

    const getPagination = async (page, pageNumber, callback) => {
        const pageInt = parseInt(page, 10);  // 10진법으로 변환
        const pageNumberInt= parseInt(pageNumber, 10);

        console.log(pageInt)
        console.log(pageNumberInt)

        const response = await fetch(`/admin/notices/${pageInt}/?page_number=${pageNumberInt}`);
        const pagination = await response.json();
        if (callback){
            return callback(pagination);
        }
        return pagination;
    }


    // 공지사항 삭제
    const remove = async (targetId) => {
        const notice_id = targetId.targetId

        await fetch(`/admin/notice/delete/${notice_id}`, {
            method: 'patch',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-CSRFToken': csrf_token
            },
            body: JSON.stringify({'notice_id': notice_id})
        });

    }

    return {write: write, getPagination:getPagination, remove: remove}
})();
